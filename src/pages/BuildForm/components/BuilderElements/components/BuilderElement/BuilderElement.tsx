import DeleteIcon from '@mui/icons-material/Delete';
import { Typography, IconButton } from '@mui/material';
import { useRef } from 'react';

import { useAppDispatch, builderActions } from '~utils/store';

import s from './BuilderElement.module.css';
import { withFormElementType } from './helpers';

interface BuilderElementProps {
  index: number;
  element: FormElement;
}

export const BuilderElement: React.FC<BuilderElementProps> = ({ index, element }) => {
  const elementRef = useRef<HTMLDivElement>(null);

  const dispatch = useAppDispatch();

  const FieldFormElement = withFormElementType(element.type) as React.FC<
    FormElementExtraAttributes[typeof element.type]
  > | null;

  if (!FieldFormElement) return null;

  const getDragAndDropOverlayAttributes = (disposition: 'lower' | 'upper') => {
    const onDragOver = (event: React.DragEvent) => {
      event.preventDefault();
      event.stopPropagation();

      elementRef.current?.classList.add(
        disposition === 'upper' ? s.upperDragOver : s.lowerDragOver,
      );
    };

    const onDragLeave = () =>
      elementRef.current?.classList.remove(
        disposition === 'upper' ? s.upperDragOver : s.lowerDragOver,
      );

    const onDrop = (event: React.DragEvent) => {
      event.stopPropagation();

      elementRef.current?.classList.remove(
        disposition === 'upper' ? s.upperDragOver : s.lowerDragOver,
      );

      const type = event.dataTransfer.getData('element-type') as FormElementType;

      dispatch(builderActions.addElement({ type, index }));
    };

    return { onDragOver, onDragLeave, onDrop };
  };

  return (
    <div className={s.elementWrapper}>
      <div
        className={s.elementDroppableOverlayUpper}
        {...getDragAndDropOverlayAttributes('upper')}
      />
      <div
        className={s.elementDroppableOverlayLower}
        {...getDragAndDropOverlayAttributes('lower')}
      />
      <div
        className={s.elementOverlay}
        aria-hidden="true"
        onClick={() => dispatch(builderActions.selectFormElement(element))}
      >
        <Typography
          className={s.elementOverlayText}
          fontSize={14}
        >
          Click for properties or drag to move
        </Typography>
        <IconButton
          onClick={(event) => {
            event.stopPropagation();
            dispatch(builderActions.deleteElement(element.id));
          }}
        >
          <DeleteIcon />
        </IconButton>
      </div>
      <div
        ref={elementRef}
        className={s.elementContainer}
      >
        <FieldFormElement {...element.extraAttributes} />
      </div>
    </div>
  );
};
