import { TextField } from '@mui/material';
import { useForm } from 'react-hook-form';

import { builderActions, useAppDispatch } from '~utils/store';

import s from './ParagraphFieldController.module.css';

type ParagraphFieldControllerProps = { id: number } & FormElementExtraAttributes['ParagraphField'];

export const ParagraphFieldController: React.FC<ParagraphFieldControllerProps> = ({
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
        error={!!errors.text?.message}
        helperText={errors.text?.message}
        {...register('text', {
          required: {
            value: true,
            message: 'Required field',
          },
          minLength: 2,
          maxLength: 500,
        })}
      />
    </form>
  );
};
