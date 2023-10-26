import { Typography } from '@mui/material';

import { FieldWrapper } from '../FieldWrapper/FieldWrapper';

interface TitleFieldProps {
  text?: string;
}

export const TitleField: React.FC<TitleFieldProps> = ({ text }) => (
  <FieldWrapper title="Title field">
    <Typography
      fontSize={18}
      fontWeight={500}
    >
      {text || 'Click to fill title'}
    </Typography>
  </FieldWrapper>
);
