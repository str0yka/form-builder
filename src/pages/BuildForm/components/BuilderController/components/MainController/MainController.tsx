import TextFieldsIcon from '@mui/icons-material/TextFields';
import TitleIcon from '@mui/icons-material/Title';
import { Typography } from '@mui/material';

import { useAppDispatch, builderActions } from '~utils/store';

import s from './MainController.module.css';

export const MainController = () => {
  const dispatch = useAppDispatch();

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
};
