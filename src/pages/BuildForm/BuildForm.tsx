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
import { useState } from 'react';

import { TextFieldElement, TitleField } from './components/fields';

type Element = 'TitleField' | 'TextField';

interface FormElement<ElementType extends Element> {
  id: number;
  type: ElementType;
}

interface TitleFieldFormElement extends FormElement<'TitleField'> {
  text?: string;
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
  const [selectedFormElement, setSelectedFormElement] = useState<null | FormElements[number]>();

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
            <Box
              key={formElement.id}
              sx={{ cursor: 'pointer' }}
              onClick={() => setSelectedFormElement(formElement)}
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
                    { id: prevFormElements.length, type: 'TextField', required: false },
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
                    { id: prevFormElements.length, type: 'TitleField' },
                  ])
                }
              >
                Title Field
              </Button>
            </Grid>
          </Grid>
        )}
        {selectedFormElement?.type === 'TitleField' && (
          <Stack spacing={2}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Typography>Fill title field</Typography>
              <IconButton onClick={() => setSelectedFormElement(null)}>
                <CloseIcon />
              </IconButton>
            </Box>
            <TextField
              label="Enter title"
              value={selectedFormElement.text}
              onChange={(event) =>
                setFormElements((prevFormElements) =>
                  prevFormElements.map((prevFormELement) => {
                    if (prevFormELement.id === selectedFormElement.id) {
                      return { ...prevFormELement, text: event.target.value };
                    }
                    return prevFormELement;
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
