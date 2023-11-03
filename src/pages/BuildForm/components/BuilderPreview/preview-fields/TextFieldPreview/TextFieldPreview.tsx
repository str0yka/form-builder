import { Typography, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';

import s from './TextFieldPreview.module.css';

interface TextFieldValues {
  value: number;
}

type TextFieldPreviewProps = FormElementExtraAttributes['TextField'];

export const TextFieldPreview: React.FC<TextFieldPreviewProps> = ({
  required,
  title,
  helperText,
  label,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TextFieldValues>({ mode: 'onBlur' });

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
