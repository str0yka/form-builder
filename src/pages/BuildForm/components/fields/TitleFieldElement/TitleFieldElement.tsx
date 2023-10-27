import { Typography } from '@mui/material';

import { FormElementWrapper } from '../FormElementWrapper/FormElementWrapper';

type TitleFieldElementProps = FormElementProps<TitleFieldFormElement>;

export const TitleFieldElement: React.FC<TitleFieldElementProps> = ({ text }) => (
  <FormElementWrapper title="Title field">
    <Typography
      fontSize={18}
      fontWeight={500}
    >
      {text || 'Click to fill title'}
    </Typography>
  </FormElementWrapper>
);
