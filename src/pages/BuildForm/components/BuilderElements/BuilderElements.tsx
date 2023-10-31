import { Typography } from '@mui/material';
import { useRef } from 'react';
import { useSelector } from 'react-redux';

import { builderSelectors, useAppDispatch, builderActions } from '~utils/store';

import s from './BuilderElements.module.css';
import { BuilderElement } from './components';

export const BuilderElements = () => {
  const elementsContainerRef = useRef<HTMLDivElement>(null);

  const dispatch = useAppDispatch();

  const elements = useSelector(
    builderSelectors.getElements,
    (a, b) => JSON.stringify(a) === JSON.stringify(b),
  );

  return (
    <div className={s.elementsWrapper}>
      <div
        ref={elementsContainerRef}
        className={s.elementsContainer}
        onDragOver={(event) => {
          event.preventDefault();

          elementsContainerRef.current?.classList.add(s.elementsContainerDragOver);
        }}
        onDragLeave={() =>
          elementsContainerRef.current?.classList.remove(s.elementsContainerDragOver)
        }
        onDrop={(event) => {
          const type = event.dataTransfer.getData('element-type') as FormElementType;

          dispatch(builderActions.addElement({ type }));

          elementsContainerRef.current?.classList.remove(s.elementsContainerDragOver);
        }}
      >
        {!elements.length && (
          <div className={s.elementsEmptyContainer}>
            <Typography
              fontSize={24}
              fontWeight={500}
            >
              Drop here
            </Typography>
          </div>
        )}
        {!!elements.length &&
          elements.map((element, index) => (
            <BuilderElement
              key={element.id}
              index={index}
              element={element}
            />
          ))}
      </div>
    </div>
  );
};
