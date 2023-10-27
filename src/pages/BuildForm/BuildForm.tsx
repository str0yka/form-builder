import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Stack,
  Container,
  Grid,
  Button,
  TextField,
  Paper,
  IconButton,
  Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';

import { builderActions, getBuilder, useAppDispatch } from '~utils/store';

import { FormElement } from './components';

export const BuildForm = () => {
  const { elements, controlledElement } = useSelector(getBuilder);

  const dispatch = useAppDispatch();

  return (
    <Box
      sx={{
        padding: 2,
        flexGrow: 1,
        display: 'flex',
        gap: 2,
      }}
    >
      <Container
        fixed
        maxWidth="md"
        sx={{ position: 'relative' }}
      >
        <Paper
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            padding: 2,
            overflow: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            '::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          {elements.map((element) => (
            <FormElement
              formElement={element}
              onSelect={() => dispatch(builderActions.selectFormElement(element))}
              onDelete={() => dispatch(builderActions.deleteElement(element.id))}
            />
          ))}
        </Paper>
      </Container>
      <Paper sx={{ padding: 2, width: 400 }}>
        {!controlledElement && (
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
        )}
        {controlledElement && controlledElement.type === 'TitleField' && (
          <Stack spacing={2}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Typography>Fill title field</Typography>
              <IconButton onClick={() => dispatch(builderActions.deselectFormElement())}>
                <CloseIcon />
              </IconButton>
            </Box>
            <TextField
              label="Enter title"
              value={controlledElement.text || ''}
              onChange={(event) =>
                dispatch(
                  builderActions.updateElement({
                    id: controlledElement.id,
                    text: event.target.value,
                  }),
                )
              }
            />
          </Stack>
        )}
      </Paper>
    </Box>
  );
};
