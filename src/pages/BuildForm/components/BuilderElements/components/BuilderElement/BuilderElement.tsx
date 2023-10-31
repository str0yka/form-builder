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

      const type = event.dataTransfer.getData('element-type') as FormElementType | undefined;
      const id = event.dataTransfer.getData('element-id');

      if (type) {
        dispatch(builderActions.addElement({ type, index }));
      } else if (id) {
        const indx = disposition === 'upper' ? index : index + 1;
        dispatch(builderActions.changeElementOrder({ id: Number(id), index: indx }));
      }

      elementRef.current?.classList.remove(
        disposition === 'upper' ? s.upperDragOver : s.lowerDragOver,
      );
    };

    return { onDragOver, onDragLeave, onDrop };
  };

  return (
    <div
      className={s.elementWrapper}
      draggable
      onDragStart={(event) => {
        event.dataTransfer.setData('element-id', element.id.toString());
      }}
    >
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
