import { Typography } from '@mui/material';

type SpaceFieldElementProps = FormElementExtraAttributes['SpaceField'];

export const SpaceFieldElement: React.FC<SpaceFieldElementProps> = ({ height }) => (
  <>
    <Typography
      fontSize={14}
      fontWeight={500}
      color={(theme) => theme.palette.text.disabled}
    >
      Space Field
    </Typography>
    <Typography
      fontSize={18}
      fontWeight={500}
    >
      {height}
    </Typography>
  </>
);
