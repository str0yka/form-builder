import { Typography, FormLabel, Select, FormHelperText, MenuItem } from '@mui/material';
import { useId, useState } from 'react';

type SelectFieldPreviewProps = FormElementExtraAttributes['SelectField'];

export const SelectFieldPreview: React.FC<SelectFieldPreviewProps> = ({
  options,
  required,
  title,
  helperText,
  label,
}) => {
  const [value, setValue] = useState(options[0].text);

  const labelId = useId();

  return (
    <>
      <Typography
        fontSize={14}
        fontWeight={500}
      >
        {title}
        {required && '*'}
      </Typography>
      {!!label && <FormLabel id={labelId}>{label}</FormLabel>}
      <Select
        size="small"
        variant="outlined"
        labelId={labelId}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      >
        {options.map((option) => (
          <MenuItem
            key={option.id}
            value={option.text}
          >
            {option.text}
          </MenuItem>
        ))}
      </Select>
      {!!helperText && <FormHelperText>{helperText}</FormHelperText>}
    </>
  );
};
