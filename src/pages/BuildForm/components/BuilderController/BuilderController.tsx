import CloseIcon from '@mui/icons-material/Close';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import TitleIcon from '@mui/icons-material/Title';
import { IconButton, Stack, Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import { useAppDispatch, builderActions, builderSelectors } from '~utils/store';

import s from './BuilderController.module.css';
import { TitleFieldController } from './components';

export const BuilderController = () => {
  const controlledElement = useSelector(builderSelectors.getControlledElement);

  const dispatch = useAppDispatch();

  if (!controlledElement) {
    return (
      <div className={s.mainControllerContainer}>
        <button
          type="button"
          className={s.mainControllerButtonContainer}
          onClick={() => dispatch(builderActions.addElement('TitleField'))}
        >
          <TitleIcon />
          <Typography fontSize={14}>Title Field</Typography>
        </button>
        <button
          type="button"
          className={s.mainControllerButtonContainer}
          onClick={() => dispatch(builderActions.addElement('TextField'))}
        >
          <TextFieldsIcon />
          <Typography fontSize={14}>Text Field</Typography>
        </button>
      </div>
    );
  }

  return (
    <Stack spacing={2}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography>Fill title field</Typography>
        <IconButton onClick={() => dispatch(builderActions.deselectFormElement())}>
          <CloseIcon />
        </IconButton>
      </Box>
      {controlledElement.type === 'TitleField' && (
        <TitleFieldController controlledElement={controlledElement} />
      )}
    </Stack>
  );
};
