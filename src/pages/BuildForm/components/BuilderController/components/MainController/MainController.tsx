import ArticleIcon from '@mui/icons-material/Article';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Filter1Icon from '@mui/icons-material/Filter1';
import HeightIcon from '@mui/icons-material/Height';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import ListIcon from '@mui/icons-material/List';
import NotesIcon from '@mui/icons-material/Notes';
import SubtitlesIcon from '@mui/icons-material/Subtitles';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import TitleIcon from '@mui/icons-material/Title';
import { Divider, Typography } from '@mui/material';

import { useAppDispatch, builderActions } from '~utils/store';

import s from './MainController.module.css';

export const MainController = () => {
  const dispatch = useAppDispatch();

  return (
    <div className={s.mainControllerContainer}>
      <Typography
        fontSize={14}
        sx={{ gridColumn: '1 / 3' }}
      >
        Layout elements
      </Typography>
      <button
        type="button"
        className={s.mainControllerButtonContainer}
        draggable
        onDragStart={(event) => {
          event.dataTransfer.setData('method', 'add');
          event.dataTransfer.setData('type', 'TitleField');
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
          event.dataTransfer.setData('method', 'add');
          event.dataTransfer.setData('type', 'SpaceField');
        }}
        onClick={() => dispatch(builderActions.addElement({ type: 'SpaceField' }))}
      >
        <HeightIcon />
        <Typography fontSize={14}>Space Field</Typography>
      </button>
      <button
        type="button"
        className={s.mainControllerButtonContainer}
        draggable
        onDragStart={(event) => {
          event.dataTransfer.setData('method', 'add');
          event.dataTransfer.setData('type', 'SeparatorField');
        }}
        onClick={() => dispatch(builderActions.addElement({ type: 'SeparatorField' }))}
      >
        <HorizontalRuleIcon />
        <Typography fontSize={14}>Separator Field</Typography>
      </button>
      <button
        type="button"
        className={s.mainControllerButtonContainer}
        draggable
        onDragStart={(event) => {
          event.dataTransfer.setData('method', 'add');
          event.dataTransfer.setData('type', 'SubtitleField');
        }}
        onClick={() => dispatch(builderActions.addElement({ type: 'SubtitleField' }))}
      >
        <SubtitlesIcon />
        <Typography fontSize={14}>Subtitle Field</Typography>
      </button>
      <button
        type="button"
        className={s.mainControllerButtonContainer}
        draggable
        onDragStart={(event) => {
          event.dataTransfer.setData('method', 'add');
          event.dataTransfer.setData('type', 'ParagraphField');
        }}
        onClick={() => dispatch(builderActions.addElement({ type: 'ParagraphField' }))}
      >
        <NotesIcon />
        <Typography fontSize={14}>Paragraph Field</Typography>
      </button>
      <Divider sx={{ gridColumn: '1 / 2 span', width: '100%' }} />
      <Typography
        fontSize={14}
        sx={{ gridColumn: '1 / 2 span' }}
      >
        Form elements
      </Typography>
      <button
        type="button"
        className={s.mainControllerButtonContainer}
        draggable
        onDragStart={(event) => {
          event.dataTransfer.setData('method', 'add');
          event.dataTransfer.setData('type', 'TextField');
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
          event.dataTransfer.setData('method', 'add');
          event.dataTransfer.setData('type', 'NumberField');
        }}
        onClick={() => dispatch(builderActions.addElement({ type: 'NumberField' }))}
      >
        <Filter1Icon />
        <Typography fontSize={14}>Number Field</Typography>
      </button>
      <button
        type="button"
        className={s.mainControllerButtonContainer}
        draggable
        onDragStart={(event) => {
          event.dataTransfer.setData('method', 'add');
          event.dataTransfer.setData('type', 'DateField');
        }}
        onClick={() => dispatch(builderActions.addElement({ type: 'DateField' }))}
      >
        <CalendarMonthIcon />
        <Typography fontSize={14}>Date Field</Typography>
      </button>
      <button
        type="button"
        className={s.mainControllerButtonContainer}
        draggable
        onDragStart={(event) => {
          event.dataTransfer.setData('method', 'add');
          event.dataTransfer.setData('type', 'SelectField');
        }}
        onClick={() => dispatch(builderActions.addElement({ type: 'SelectField' }))}
      >
        <ListIcon />
        <Typography fontSize={14}>Select Field</Typography>
      </button>
      <button
        type="button"
        className={s.mainControllerButtonContainer}
        draggable
        onDragStart={(event) => {
          event.dataTransfer.setData('method', 'add');
          event.dataTransfer.setData('type', 'CheckboxField');
        }}
        onClick={() => dispatch(builderActions.addElement({ type: 'CheckboxField' }))}
      >
        <CheckBoxIcon />
        <Typography fontSize={14}>Checkbox Field</Typography>
      </button>
      <button
        type="button"
        className={s.mainControllerButtonContainer}
        draggable
        onDragStart={(event) => {
          event.dataTransfer.setData('method', 'add');
          event.dataTransfer.setData('type', 'TextareaField');
        }}
        onClick={() => dispatch(builderActions.addElement({ type: 'TextareaField' }))}
      >
        <ArticleIcon />
        <Typography fontSize={14}>Textarea Field</Typography>
      </button>
    </div>
  );
};
