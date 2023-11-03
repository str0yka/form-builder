import { Typography, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';

import s from './TextFieldPreview.module.css';

interface TextareaFieldValues {
  value: number;
}

type TextareaFieldPreviewProps = FormElementExtraAttributes['TextareaField'];

export const TextareaFieldPreview: React.FC<TextareaFieldPreviewProps> = ({
  required,
  title,
  helperText,
  label,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TextareaFieldValues>({ mode: 'onBlur' });

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
        multiline
        rows={3}
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
