import { TextField, FormHelperText, Typography } from '@mui/material';

type TextFieldElementProps = FormElementExtraAttributes['TextField'];

export const TextFieldElement: React.FC<TextFieldElementProps> = ({
  title,
  required,
  helperText,
  label,
}) => (
  <>
    <Typography
      fontSize={14}
      fontWeight={500}
    >{`${title || 'TextField'}${required ? '*' : ''}`}</Typography>
    <TextField
      variant="outlined"
      label={label}
      disabled
    />
    <FormHelperText>{typeof helperText === 'string' ? helperText : 'Helper text'}</FormHelperText>
  </>
);
