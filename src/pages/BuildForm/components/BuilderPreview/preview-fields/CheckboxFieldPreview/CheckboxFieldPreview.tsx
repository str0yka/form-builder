import { Typography, FormControl, Checkbox, FormControlLabel, FormHelperText } from '@mui/material';
import { useForm } from 'react-hook-form';

import s from './CheckboxFieldPreview.module.css';

interface CheckboxFieldValues {
  value: boolean;
}

type CheckboxFieldPreviewProps = FormElementExtraAttributes['CheckboxField'];

export const CheckboxFieldPreview: React.FC<CheckboxFieldPreviewProps> = ({
  required,
  title,
  helperText,
  label,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckboxFieldValues>({ mode: 'onBlur' });

  return (
    <form
      className={s.fieldContainer}
      onBlur={handleSubmit(() => {})}
    >
      <Typography
        fontSize={14}
        fontWeight={500}
      >
        {title}
        {required && '*'}
      </Typography>
      <FormControl>
        <FormControlLabel
          label={label}
          control={
            <Checkbox
              disabled
              {...register('value', {
                required: {
                  value: required,
                  message: 'required field',
                },
              })}
            />
          }
        />
        {!!helperText && !errors.value?.message && <FormHelperText>{helperText}</FormHelperText>}
        {!!errors.value?.message && <FormHelperText>{errors.value.message}</FormHelperText>}
      </FormControl>
    </form>
  );
};
