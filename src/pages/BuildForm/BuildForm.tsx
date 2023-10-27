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
  Tooltip,
} from '@mui/material';
import { useMemo, useState } from 'react';

import { TextFieldElement, TitleField } from './components/fields';

type Element = 'TitleField' | 'TextField';

interface FormElement<ElementType extends Element> {
  id: number;
  type: ElementType;
}

interface TitleFieldFormElement extends FormElement<'TitleField'> {
  text: string;
}

interface TextFieldFormElement extends FormElement<'TextField'> {
  required: boolean;
  title?: string;
  helperText?: string;
  label?: string;
}

type FormElements = Array<TitleFieldFormElement | TextFieldFormElement>;

export const BuildForm = () => {
  const [formElements, setFormElements] = useState<FormElements>([]);
  const [selectedFormElementId, setSelectedFormElementId] = useState<null | number>(null);

  const selectedFormElement =
    selectedFormElementId !== null &&
    formElements.find((formElement) => formElement.id === selectedFormElementId);

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
          {formElements.map((formElement) => (
            <Tooltip
              placement="left"
              title={
                <Button
                  color="error"
                  onClick={() =>
                    setFormElements((prevFormElements) =>
                      prevFormElements.filter(
                        (prevFormElement) => prevFormElement.id !== formElement.id,
                      ),
                    )
                  }
                >
                  Delete
                </Button>
              }
            >
              <Box
                key={formElement.id}
                sx={{ cursor: 'pointer' }}
                onClick={() => setSelectedFormElementId(formElement.id)}
              >
                {(() => {
                  switch (formElement.type) {
                    case 'TextField':
                      return (
                        <TextFieldElement
                          label={formElement.label}
                          title={formElement.title}
                          helperText={formElement.helperText}
                          required={formElement.required}
                        />
                      );
                    case 'TitleField':
                      return <TitleField text={formElement.text} />;
                    default:
                      return null;
                  }
                })()}
              </Box>
            </Tooltip>
          ))}
        </Paper>
      </Container>
      <Paper sx={{ padding: 2, width: 400 }}>
        {!selectedFormElement && (
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
        )}
        {selectedFormElement && selectedFormElement.type === 'TitleField' && (
          <Stack spacing={2}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Typography>Fill title field</Typography>
              <IconButton onClick={() => setSelectedFormElementId(null)}>
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
        )}
      </Paper>
    </Box>
  );
};
