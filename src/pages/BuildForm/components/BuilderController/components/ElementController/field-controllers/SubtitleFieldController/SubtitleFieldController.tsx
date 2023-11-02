import { TextField } from '@mui/material';
import { useForm } from 'react-hook-form';

import { builderActions, useAppDispatch } from '~utils/store';

import s from './SubtitleFieldController.module.css';

type SubtitleFieldControllerProps = { id: number } & FormElementExtraAttributes['SubtitleField'];

export const SubtitleFieldController: React.FC<SubtitleFieldControllerProps> = ({
  id,
  ...extraAttributes
}) => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    values: extraAttributes,
  });

  return (
    <form
      className={s.formContainer}
      onBlur={handleSubmit((values) => dispatch(builderActions.updateElement({ id, ...values })))}
    >
      <TextField
        label="Title text"
        error={!!errors.subtitle?.message}
        helperText={errors.subtitle?.message}
        {...register('subtitle', {
          required: {
            value: true,
            message: 'Required field',
          },
          minLength: 2,
          maxLength: 50,
        })}
      />
    </form>
  );
};
