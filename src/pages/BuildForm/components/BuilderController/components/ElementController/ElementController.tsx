import CloseIcon from '@mui/icons-material/Close';
import { Typography, IconButton } from '@mui/material';

import { useAppDispatch, builderActions } from '~utils/store';

import s from './ElementController.module.css';
import { withControlledElementType } from './helpers';

interface ElementControllerProps {
  controlledElement: FormElement;
}

export const ElementController: React.FC<ElementControllerProps> = ({ controlledElement }) => {
  const dispatch = useAppDispatch();

  const FieldController = withControlledElementType(controlledElement.type) as React.FC<
    { id: number } & FormElementExtraAttributes[typeof controlledElement.type]
  >;

  if (!FieldController) return null;

  return (
    <div>
      <div className={s.controllerHeaderContainer}>
        <Typography
          fontSize={14}
          color={(theme) => theme.palette.text.disabled}
        >
          Element properties
        </Typography>
        <IconButton onClick={() => dispatch(builderActions.deselectFormElement())}>
          <CloseIcon />
        </IconButton>
      </div>
      <FieldController
        id={controlledElement.id}
        {...controlledElement.extraAttributes}
      />
    </div>
  );
};
