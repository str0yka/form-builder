import { Box, Stack, Container, Grid, Button } from '@mui/material';
import React, { useState } from 'react';

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

type PanelMode = 'main' | `local:${FormElements[number]['id']}`;

export const BuildForm = () => {
  const [formElements, setFormElements] = useState<FormElements>([]);
  const [panelMode, setPanelMode] = useState<PanelMode>('main');

  return (
    <Container>
      <Box
        sx={{
          height: '100%',
          mt: '20px',
          padding: 2,
          flexGrow: 1,
          display: 'flex',
          alignItems: 'flex-start',
          gap: 2,
        }}
      >
        <Box
          sx={{
            width: 720,
            minHeight: 700,
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: (theme) => theme.palette.divider,
            borderRadius: 1,
          }}
        >
          <Stack
            spacing={2}
            padding={2}
          >
            {formElements.map((formElement) => (
              <React.Fragment key={formElement.id}>
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
              </React.Fragment>
            ))}
          </Stack>
        </Box>
        <Box>
          <Box
            padding={1}
            minHeight="700px"
            width="300px"
            borderRadius={1}
            sx={{ backgroundColor: (theme) => theme.palette.divider }}
          >
            {panelMode === 'main' && (
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
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
