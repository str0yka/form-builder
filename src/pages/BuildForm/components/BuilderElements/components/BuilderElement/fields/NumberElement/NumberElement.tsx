import { TextField, Typography } from '@mui/material';

type NumberFieldElementProps = FormElementExtraAttributes['NumberField'];

export const NumberFieldElement: React.FC<NumberFieldElementProps> = ({
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
      type="number"
      variant="outlined"
      label={label}
      disabled
      {...(!!helperText && { helperText })}
    />
  </>
);
