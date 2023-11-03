import { Typography } from '@mui/material';

type ParagraphFieldPreviewProps = FormElementExtraAttributes['ParagraphField'];

export const ParagraphFieldPreview: React.FC<ParagraphFieldPreviewProps> = ({ text }) => (
  <Typography
    fontSize={14}
    fontWeight={400}
  >
    {text}
  </Typography>
);
