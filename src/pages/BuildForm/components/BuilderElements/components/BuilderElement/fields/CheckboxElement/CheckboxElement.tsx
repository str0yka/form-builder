import { Checkbox, FormControl, FormControlLabel, FormHelperText, Typography } from '@mui/material';

type CheckboxFieldElementProps = FormElementExtraAttributes['CheckboxField'];

export const CheckboxFieldElement: React.FC<CheckboxFieldElementProps> = ({
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
    <div>
      <FormControl>
        <FormControlLabel
          label={label}
          control={<Checkbox disabled />}
        />
        {!!helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    </div>
  </>
);
