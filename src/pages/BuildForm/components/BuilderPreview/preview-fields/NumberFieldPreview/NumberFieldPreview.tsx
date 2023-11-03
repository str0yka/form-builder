import { Typography, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';

import s from './NumberFieldPreview.module.css';

interface NumberFieldValues {
  value: number;
}

type NumberFieldPreviewProps = FormElementExtraAttributes['NumberField'];

export const NumberFieldPreview: React.FC<NumberFieldPreviewProps> = ({
  required,
  title,
  helperText,
  label,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NumberFieldValues>({ mode: 'onBlur' });

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
      <TextField
        type="number"
        variant="outlined"
        label={label}
        error={!!errors.value?.message}
        {...register('value', {
          required: {
            value: required,
            message: 'required field',
          },
        })}
        {...(!!helperText && {
          helperText,
        })}
        {...(!!errors.value && {
          helperText: errors.value.message,
        })}
      />
    </form>
  );
};
