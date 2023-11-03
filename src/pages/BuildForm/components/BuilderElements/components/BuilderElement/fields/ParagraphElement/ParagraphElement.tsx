import { Typography } from '@mui/material';

type ParagraphFieldElementProps = FormElementExtraAttributes['ParagraphField'];

export const ParagraphFieldElement: React.FC<ParagraphFieldElementProps> = ({ text }) => (
  <>
    <Typography
      fontSize={14}
      fontWeight={500}
      color={(theme) => theme.palette.text.disabled}
    >
      Paragraph Field
    </Typography>
    <Typography
      fontSize={18}
      fontWeight={500}
    >
      {text}
    </Typography>
  </>
);
