import { TextField, FormHelperText } from '@mui/material';

import { FormElementWrapper } from '../FormElementWrapper/FormElementWrapper';

type TextFieldElementProps = FormElementProps<TextFieldFormElement>;

export const TextFieldElement: React.FC<TextFieldElementProps> = ({
  required = false,
  title,
  helperText,
  label,
}) => (
  <FormElementWrapper title={`${title || 'TextField'}${required ? '*' : ''}`}>
    <TextField
      variant="outlined"
      label={label}
      disabled
    />
    {helperText && <FormHelperText>{helperText}</FormHelperText>}
  </FormElementWrapper>
);
