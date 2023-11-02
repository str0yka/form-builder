import { Typography, Divider } from '@mui/material';

type SeparatorFieldElementProps = FormElementExtraAttributes['SeparatorField'];

export const SeparatorFieldElement: React.FC<SeparatorFieldElementProps> = () => (
  <>
    <Typography
      fontSize={14}
      fontWeight={500}
      color={(theme) => theme.palette.text.disabled}
    >
      Separator Field
    </Typography>
    <Divider />
  </>
);
