import CloseIcon from '@mui/icons-material/Close';
import { Grid, Button, IconButton, TextField, Stack, Box, Typography } from '@mui/material';

interface ControllerProps {
  controllerFormElement: FormElement | null;
  onExit: () => void;
}

export const Controller: React.FC<ControllerProps> = ({ controllerFormElement, onExit }) => {
  if (!controllerFormElement) {
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
            onClick={() =>
              setFormElements((prevFormElements) => [
                ...prevFormElements,
                { id: new Date().valueOf(), type: 'TextField', required: false },
              ])
            }
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
            onClick={() =>
              setFormElements((prevFormElements) => [
                ...prevFormElements,
                { id: new Date().valueOf(), type: 'TitleField', text: '' },
              ])
            }
          >
            Title Field
          </Button>
        </Grid>
      </Grid>
    );
  }

  if (controllerFormElement.type === 'TitleField') {
    return (
      <Stack spacing={2}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography>Fill title field</Typography>
          <IconButton onClick={onExit}>
            <CloseIcon />
          </IconButton>
        </Box>
        <TextField
          label="Enter title"
          value={selectedFormElement.text}
          onChange={(event) =>
            setFormElements(
              formElements.map((formElement) => {
                if (formElement.id === selectedFormElement.id) {
                  return { ...formElement, text: event.target.value };
                }
                return formElement;
              }),
            )
          }
        />
      </Stack>
    );
  }
};
