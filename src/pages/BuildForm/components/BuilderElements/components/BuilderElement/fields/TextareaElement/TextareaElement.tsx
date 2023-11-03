import { TextField, Typography } from '@mui/material';

type TextareaFieldElementProps = FormElementExtraAttributes['TextareaField'];

export const TextareaFieldElement: React.FC<TextareaFieldElementProps> = ({
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
      multiline
      rows={2}
      {...(!!helperText && { helperText })}
    />
  </>
);
