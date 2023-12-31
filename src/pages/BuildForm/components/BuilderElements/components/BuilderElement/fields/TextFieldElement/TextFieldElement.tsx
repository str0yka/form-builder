import { TextField, Typography } from '@mui/material';

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
    >
      {title}
      {required && '*'}
    </Typography>
    <TextField
      variant="outlined"
      label={label}
      disabled
      {...(!!helperText && { helperText })}
    />
  </>
);
