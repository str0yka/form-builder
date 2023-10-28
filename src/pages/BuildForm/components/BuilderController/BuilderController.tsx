import CloseIcon from '@mui/icons-material/Close';
import { Grid, Button, IconButton, Stack, Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import { useAppDispatch, builderActions, builderSelectors } from '~utils/store';

import { TitleFieldController } from './components';

export const BuilderController = () => {
  const controlledElement = useSelector(builderSelectors.getControlledElement);

  const dispatch = useAppDispatch();

  if (!controlledElement) {
    return (
      <Grid
        container
        columns={2}
        columnSpacing={1}
        rowSpacing={1}
      >
        <Grid
          item
          xs={1}
        >
          <Button
            variant="outlined"
            sx={{ width: '100%', height: '100%' }}
            onClick={() => dispatch(builderActions.addElement('TextField'))}
          >
            Text Field
          </Button>
        </Grid>
        <Grid
          item
          xs={1}
        >
          <Button
            variant="outlined"
            sx={{ width: '100%', height: '100%' }}
            onClick={() => dispatch(builderActions.addElement('TitleField'))}
          >
            Title Field
          </Button>
        </Grid>
      </Grid>
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
