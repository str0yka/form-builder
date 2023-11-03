import { Switch, TextField, FormHelperText, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

import { builderActions, useAppDispatch } from '~utils/store';

import s from './TextFieldController.module.css';

type TextFieldControllerProps = { id: number } & FormElementExtraAttributes['TextField'];

export const TextFieldController: React.FC<TextFieldControllerProps> = ({
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
    values: extraAttributes,
  });

  return (
    <form
      className={s.formContainer}
      onBlur={handleSubmit((values) => dispatch(builderActions.updateElement({ id, ...values })))}
    >
      <div className={s.formItemContainer}>
        <TextField
          size="small"
          label="Title text"
          error={!!errors.title?.message}
          helperText={errors.title?.message}
          {...register('title', { required: 'required field' })}
        />
        <FormHelperText>
          The title of the field. it will be displayed above the field
        </FormHelperText>
      </div>
      <div className={s.formItemContainer}>
        <TextField
          size="small"
          label="Label"
          error={!!errors.label?.message}
          helperText={errors.label?.message}
          {...register('label')}
        />
        <FormHelperText>Some kind of placeholder, will displayed in field</FormHelperText>
      </div>
      <div className={s.formItemContainer}>
        <TextField
          size="small"
          label="Helper text"
          error={!!errors.helperText?.message}
          helperText={errors.helperText?.message}
          {...register('helperText')}
        />
        <FormHelperText>
          The helper text of the field. It will be displayed below the field.
        </FormHelperText>
      </div>
      <div className={s.formRequiredItemContainer}>
        <div className={s.formRequiredItem}>
          <Typography
            fontWeight={500}
            fontSize={14}
          >
            Required
          </Typography>
          <FormHelperText>
            The helper text of the field. It will be displayed below the field.
          </FormHelperText>
        </div>
        <Switch {...register('required')} />
      </div>
    </form>
  );
};
