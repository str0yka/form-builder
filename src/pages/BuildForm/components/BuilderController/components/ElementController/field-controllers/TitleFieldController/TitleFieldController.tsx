import { TextField } from '@mui/material';
import { useForm } from 'react-hook-form';

import { builderActions, useAppDispatch } from '~utils/store';

import s from './TitleFieldController.module.css';

type TitleFieldControllerProps = { id: number } & FormElementExtraAttributes['TitleField'];

export const TitleFieldController: React.FC<TitleFieldControllerProps> = ({
  id,
  ...extraAttributes
}) => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormElementExtraAttributes['TitleField']>({
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
        error={!!errors.title?.message}
        helperText={errors.title?.message}
        {...register('title', {
          required: {
            value: true,
            message: 'Required field',
          },
        })}
      />
    </form>
  );
};
