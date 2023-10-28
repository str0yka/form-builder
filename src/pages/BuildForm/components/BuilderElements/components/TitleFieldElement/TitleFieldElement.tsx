import { Typography } from '@mui/material';

import { FormElementWrapper } from '../FormElementWrapper/FormElementWrapper';

type TitleFieldElementProps = FormElementProps<'TitleField'>;

export const TitleFieldElement: React.FC<TitleFieldElementProps> = ({
  text,
  onDelete,
  onSelect,
}) => (
  <FormElementWrapper
    title="Title field"
    onDelete={onDelete}
    onSelect={onSelect}
  >
    <Typography
      fontSize={18}
      fontWeight={500}
    >
      {text || 'Empty title'}
    </Typography>
  </FormElementWrapper>
);
