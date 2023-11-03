import { FormControl, Select, FormHelperText, InputLabel, Typography } from '@mui/material';
import { useId } from 'react';

type SelectFieldElementProps = FormElementExtraAttributes['SelectField'];

export const SelectFieldElement: React.FC<SelectFieldElementProps> = ({
  title,
  required,
  helperText,
  label,
}) => {
  const id = useId();

  return (
    <>
      <Typography
        fontSize={14}
        fontWeight={500}
      >
        {title}
        {required && '*'}
      </Typography>
      <FormControl>
        {!!label && <InputLabel id={id}>{label}</InputLabel>}
        <Select
          variant="outlined"
          labelId={id}
          value=""
          disabled
        />
        {!!helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    </>
  );
};
