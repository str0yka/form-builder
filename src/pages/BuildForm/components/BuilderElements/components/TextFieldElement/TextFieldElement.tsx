import { TextField, FormHelperText } from '@mui/material';

import { FormElementWrapper } from '../FormElementWrapper/FormElementWrapper';

type TextFieldElementProps = FormElementProps<'TextField'>;

export const TextFieldElement: React.FC<TextFieldElementProps> = ({
  title,
  required,
  helperText,
  label,
  onDelete,
  onSelect,
}) => (
  <FormElementWrapper
    title={`${title || 'TextField'}${required ? '*' : ''}`}
    onDelete={onDelete}
    onSelect={onSelect}
  >
    <TextField
      variant="outlined"
      label={label}
      disabled
    />
    {helperText && <FormHelperText>{helperText}</FormHelperText>}
  </FormElementWrapper>
);
