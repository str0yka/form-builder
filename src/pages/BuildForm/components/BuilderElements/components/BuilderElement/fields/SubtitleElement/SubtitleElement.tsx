import { Typography } from '@mui/material';

type SubtitleFieldElementProps = FormElementExtraAttributes['SubtitleField'];

export const SubtitleFieldElement: React.FC<SubtitleFieldElementProps> = ({ subtitle }) => (
  <>
    <Typography
      fontSize={14}
      fontWeight={500}
      color={(theme) => theme.palette.text.disabled}
    >
      Subtitle Field
    </Typography>
    <Typography
      fontSize={18}
      fontWeight={500}
    >
      {subtitle}
    </Typography>
  </>
);
