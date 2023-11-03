import { Typography } from '@mui/material';

type TitleFieldPreviewProps = FormElementExtraAttributes['TitleField'];

export const TitleFieldPreview: React.FC<TitleFieldPreviewProps> = ({ title }) => (
  <Typography
    fontSize={20}
    fontWeight={500}
  >
    {title}
  </Typography>
);
