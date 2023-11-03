import { Box } from '@mui/material';

type SpaceFieldPreviewProps = FormElementExtraAttributes['SpaceField'];

export const SpaceFieldPreview: React.FC<SpaceFieldPreviewProps> = ({ height }) => (
  <Box height={height} />
);
