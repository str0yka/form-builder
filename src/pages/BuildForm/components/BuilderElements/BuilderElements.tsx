import DeleteIcon from '@mui/icons-material/Delete';
import { Typography, IconButton } from '@mui/material';
import { useSelector } from 'react-redux';

import { builderActions, builderSelectors, useAppDispatch } from '~utils/store';

import s from './BuilderElements.module.css';
import { TextFieldElement, TitleFieldElement } from './components';

export const BuilderElements = () => {
  const dispatch = useAppDispatch();

  const elements = useSelector(builderSelectors.getElements);

  return (
    <div className={s.elementsWrapper}>
      <div className={s.elementsContainer}>
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
          elements.map((element) => {
            let Element;

            if (element.type === 'TextField') {
              Element = TextFieldElement;
            }

            if (element.type === 'TitleField') {
              Element = TitleFieldElement;
            }

            if (!Element) return null;

            return (
              <div className={s.elementWrapper}>
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
                <div className={s.elementContainer}>
                  <Element {...element.extraAttributes} />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
