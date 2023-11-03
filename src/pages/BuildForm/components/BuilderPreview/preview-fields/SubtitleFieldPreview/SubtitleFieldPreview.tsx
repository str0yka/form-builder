import { Typography } from '@mui/material';

type SubtitleFieldPreviewProps = FormElementExtraAttributes['SubtitleField'];

export const SubtitleFieldPreview: React.FC<SubtitleFieldPreviewProps> = ({ subtitle }) => (
  <Typography
    color={(theme) => theme.palette.text.disabled}
    fontSize={12}
    fontWeight={400}
  >
    {subtitle}
  </Typography>
);
