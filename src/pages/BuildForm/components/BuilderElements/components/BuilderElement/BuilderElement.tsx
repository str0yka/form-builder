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
  const elementWrapperRef = useRef<HTMLDivElement>(null);

  const dispatch = useAppDispatch();

  const FieldFormElement = withFormElementType(element.type) as React.FC<
    FormElementExtraAttributes[typeof element.type]
  > | null;

  if (!FieldFormElement) return null;

  return (
    <div
      ref={elementWrapperRef}
      className={s.elementWrapper}
      draggable
      onDragStart={(event) => {
        setTimeout(() => elementWrapperRef.current?.classList.add(s.elementWrapperHidden), 0);
        event.dataTransfer.setData('method', 'swap');
        event.dataTransfer.setData('index', `${index}`);
      }}
      onDragEnd={() => elementWrapperRef.current?.classList.remove(s.elementWrapperHidden)}
      onDragOver={(event) => {
        event.preventDefault();
      }}
    >
      <div
        className={s.elementDroppableOverlayUpper}
        onDrop={(event) => {
          event.preventDefault();
          event.stopPropagation();

          const method = event.dataTransfer.getData('method');

          if (method === 'swap') {
            const firstIndex = Number(event.dataTransfer.getData('index'));
            const secondIndex = firstIndex < index ? index - 1 : index;
            dispatch(builderActions.swapElements({ firstIndex, secondIndex }));
          }

          if (method === 'add') {
            const type = event.dataTransfer.getData('type') as FormElementType;
            const toIndex = index;

            dispatch(builderActions.addElement({ type, toIndex }));
          }

          elementRef.current?.classList.remove(s.upperDragOver);
        }}
        onDragOver={(event) => {
          event.preventDefault();
          event.stopPropagation();
          elementRef.current?.classList.add(s.upperDragOver);
        }}
        onDragLeave={(event) => {
          event.preventDefault();
          event.stopPropagation();
          elementRef.current?.classList.remove(s.upperDragOver);
        }}
      />
      <div
        className={s.elementDroppableOverlayLower}
        onDrop={(event) => {
          event.preventDefault();
          event.stopPropagation();

          const method = event.dataTransfer.getData('method');

          if (method === 'swap') {
            const firstIndex = Number(event.dataTransfer.getData('index'));
            const secondIndex = firstIndex < index ? index : index + 1;
            dispatch(builderActions.swapElements({ firstIndex, secondIndex }));
          }

          if (method === 'add') {
            const type = event.dataTransfer.getData('type') as FormElementType;
            const toIndex = index + 1;

            dispatch(builderActions.addElement({ type, toIndex }));
          }

          elementRef.current?.classList.remove(s.lowerDragOver);
        }}
        onDragOver={(event) => {
          event.preventDefault();
          event.stopPropagation();
          elementRef.current?.classList.add(s.lowerDragOver);
        }}
        onDragLeave={(event) => {
          event.preventDefault();
          event.stopPropagation();
          elementRef.current?.classList.remove(s.lowerDragOver);
        }}
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
