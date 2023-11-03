import DeleteIcon from '@mui/icons-material/Delete';
import {
  Switch,
  TextField,
  FormHelperText,
  Typography,
  Divider,
  Button,
  IconButton,
} from '@mui/material';
import { useForm, useFieldArray } from 'react-hook-form';

import { builderActions, useAppDispatch } from '~utils/store';

import s from './SelectFieldController.module.css';

type SelectFieldControllerProps = { id: number } & FormElementExtraAttributes['SelectField'];

export const SelectFieldController: React.FC<SelectFieldControllerProps> = ({
  id,
  options,
  ...otherExtraAttributes
}) => {
  const dispatch = useAppDispatch();

  const {
    register: registerOtherExtraAttributes,
    handleSubmit: handleSubmitOtherExtraAttributes,
    formState: { errors: errorsOtherExtraAttributes },
  } = useForm({
    mode: 'onBlur',
    values: otherExtraAttributes,
  });

  const {
    register: registerOptions,
    handleSubmit: handleSubmitOptions,
    formState: { errors: errorsOptions },
    control: controlOptions,
  } = useForm({
    mode: 'onBlur',
    values: { options },
  });

  const { fields, append, remove } = useFieldArray({
    name: 'options',
    control: controlOptions,
  });

  const onBlur = async () => {
    await handleSubmitOtherExtraAttributes((values) => {
      dispatch(builderActions.updateElement({ id, ...values }));
    })();
    await handleSubmitOptions((values) => {
      dispatch(builderActions.updateElement({ id, ...values }));
    })();
  };

  return (
    <form
      className={s.formContainer}
      onBlur={onBlur}
    >
      <div className={s.formItemContainer}>
        <TextField
          size="small"
          label="Title text"
          error={!!errorsOtherExtraAttributes.title?.message}
          helperText={errorsOtherExtraAttributes.title?.message}
          {...registerOtherExtraAttributes('title', { required: 'required field' })}
        />
        <FormHelperText>
          The title of the field. it will be displayed above the field
        </FormHelperText>
      </div>
      <div className={s.formItemContainer}>
        <TextField
          size="small"
          label="Label"
          error={!!errorsOtherExtraAttributes.label?.message}
          helperText={errorsOtherExtraAttributes.label?.message}
          {...registerOtherExtraAttributes('label')}
        />
        <FormHelperText>Some kind of placeholder, will displayed in field</FormHelperText>
      </div>
      <div className={s.formItemContainer}>
        <TextField
          size="small"
          label="Helper text"
          error={!!errorsOtherExtraAttributes.helperText?.message}
          helperText={errorsOtherExtraAttributes.helperText?.message}
          {...registerOtherExtraAttributes('helperText')}
        />
        <FormHelperText>
          The helper text of the field. It will be displayed below the field.
        </FormHelperText>
      </div>
      <Divider />
      <div className={s.formItemOptionsContainer}>
        <div className={s.formItemOptionsHeader}>
          <Typography
            fontWeight={500}
            fontSize={14}
          >
            Options
          </Typography>
          <Button
            variant="outlined"
            onClick={() => append({ id: new Date().valueOf(), text: '' })}
          >
            Add
          </Button>
        </div>
        {fields.map((field, index) => (
          <TextField
            size="small"
            key={field.id}
            error={!!errorsOptions.options?.[index]?.text?.message}
            helperText={errorsOptions.options?.[index]?.text?.message}
            InputProps={{
              endAdornment: (
                <IconButton
                  size="small"
                  color={errorsOptions.options?.[index]?.text?.message ? 'error' : 'primary'}
                  onClick={() => remove(index)}
                >
                  <DeleteIcon sx={{ width: 20, height: 20 }} />
                </IconButton>
              ),
            }}
            {...registerOptions(`options.${index}.text` as const, {
              required: 'required field',
            })}
          />
        ))}
        <FormHelperText>
          The option of the select field. It will displayd as list inside select
        </FormHelperText>
      </div>
      <Divider />
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
        <Switch {...registerOtherExtraAttributes('required')} />
      </div>
    </form>
  );
};
