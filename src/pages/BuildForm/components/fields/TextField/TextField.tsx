import { TextField, FormHelperText } from '@mui/material';

import { FieldWrapper } from '../FieldWrapper/FieldWrapper';

interface TextFieldElementProps {
  required?: boolean;
  title?: string;
  helperText?: string;
  label?: string;
}

export const TextFieldElement: React.FC<TextFieldElementProps> = ({
  required = false,
  title,
  helperText,
  label,
}) => (
  <FieldWrapper title={`${title || 'TextField'}${required ? '*' : ''}`}>
    <TextField
      variant="outlined"
      label={label}
      disabled
    />
    {helperText && <FormHelperText>{helperText}</FormHelperText>}
  </FieldWrapper>
);
