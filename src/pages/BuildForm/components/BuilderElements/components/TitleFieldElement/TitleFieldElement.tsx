import { Typography } from '@mui/material';

type TitleFieldElementProps = FormElementExtraAttributes['TitleField'];

export const TitleFieldElement: React.FC<TitleFieldElementProps> = ({ text }) => (
  <>
    <Typography
      fontSize={14}
      fontWeight={500}
      color={(theme) => theme.palette.text.disabled}
    >
      Title Field
    </Typography>
    <Typography
      fontSize={18}
      fontWeight={500}
    >
      {text || 'Empty title'}
    </Typography>
  </>
);
