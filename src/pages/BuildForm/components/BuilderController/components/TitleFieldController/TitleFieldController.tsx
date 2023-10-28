import { TextField } from '@mui/material';

import { builderActions, useAppDispatch } from '~utils/store';

interface TitleFieldControllerProps {
  controlledElement: TitleFieldFormElement;
}

export const TitleFieldController: React.FC<TitleFieldControllerProps> = ({
  controlledElement,
}) => {
  const dispatch = useAppDispatch();

  return (
    <TextField
      label="Enter title"
      value={controlledElement.extraAttributes.text ?? ''}
      onChange={(event) =>
        dispatch(
          builderActions.updateElement({ id: controlledElement.id, text: event.target.value }),
        )
      }
    />
  );
};
