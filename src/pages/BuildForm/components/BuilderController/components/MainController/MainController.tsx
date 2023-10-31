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
        draggable
        onDragStart={(event) => {
          event.dataTransfer.setData('element-type', 'TitleField');
        }}
        onClick={() => dispatch(builderActions.addElement({ type: 'TitleField' }))}
      >
        <TitleIcon />
        <Typography fontSize={14}>Title Field</Typography>
      </button>
      <button
        type="button"
        className={s.mainControllerButtonContainer}
        draggable
        onDragStart={(event) => {
          event.dataTransfer.setData('element-type', 'TextField');
        }}
        onClick={() => dispatch(builderActions.addElement({ type: 'TextField' }))}
      >
        <TextFieldsIcon />
        <Typography fontSize={14}>Text Field</Typography>
      </button>
      <button
        type="button"
        className={s.mainControllerButtonContainer}
        draggable
        onDragStart={(event) => {
          event.dataTransfer.setData('element-type', 'SpaceField');
        }}
        onClick={() => dispatch(builderActions.addElement({ type: 'SpaceField' }))}
      >
        <TextFieldsIcon />
        <Typography fontSize={14}>Space Field</Typography>
      </button>
    </div>
  );
};
