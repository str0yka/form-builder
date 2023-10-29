import DeleteIcon from '@mui/icons-material/Delete';
import { Typography, IconButton } from '@mui/material';

import { useAppDispatch, builderActions } from '~utils/store';

import s from './BuilderElement.module.css';
import { withFormElementType } from './helpers';

interface BuilderElementProps {
  element: FormElement;
}

export const BuilderElement: React.FC<BuilderElementProps> = ({ element }) => {
  const dispatch = useAppDispatch();

  const FieldFormElement = withFormElementType(element.type);

  if (!FieldFormElement) return null;

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
        <FieldFormElement {...element.extraAttributes} />
      </div>
    </div>
  );
};
