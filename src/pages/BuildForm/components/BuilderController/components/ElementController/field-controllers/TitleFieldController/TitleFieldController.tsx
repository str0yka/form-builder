import { TextField } from '@mui/material';
import { useForm } from 'react-hook-form';

import { builderActions, useAppDispatch } from '~utils/store';

import s from './TitleFieldController.module.css';

type TitleFieldControllerProps = Pick<FormElement, 'id'> & FormElementExtraAttributes['TitleField'];

export const TitleFieldController: React.FC<TitleFieldControllerProps> = ({
  id,
  ...extraAttributes
}) => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<typeof extraAttributes>({
    mode: 'onBlur',
    defaultValues: extraAttributes,
  });

  return (
    <form
      className={s.formContainer}
      onBlur={handleSubmit((values) => dispatch(builderActions.updateElement({ id, ...values })))}
    >
      <TextField
        label="Title text"
        error={!!errors.text?.message}
        helperText={errors.text?.message}
        {...register('text', {
          required: {
            value: true,
            message: 'Required field',
          },
        })}
      />
    </form>
  );
};
