import { Slider, FormLabel } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';

import { builderActions, useAppDispatch } from '~utils/store';

import s from './SpaceFieldController.module.css';

type SpaceFieldControllerProps = { id: number } & FormElementExtraAttributes['SpaceField'];

export const SpaceFieldController: React.FC<SpaceFieldControllerProps> = ({
  id,
  ...extraAttributes
}) => {
  const dispatch = useAppDispatch();

  const { handleSubmit, control } = useForm({
    mode: 'onBlur',
    values: extraAttributes,
  });

  return (
    <form
      className={s.formContainer}
      onBlur={handleSubmit((values) => dispatch(builderActions.updateElement({ id, ...values })))}
    >
      <Controller
        name="height"
        render={({ field: { value, onChange } }) => (
          <>
            <FormLabel>Height: {value}px</FormLabel>
            <Slider
              value={value}
              onChange={onChange}
              max={200}
              min={5}
            />
          </>
        )}
        control={control}
      />
    </form>
  );
};
