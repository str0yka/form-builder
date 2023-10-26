import { Box, Stack } from '@mui/material';

import { TitleField } from './components/fields';

export const BuildForm = () => (
  <Box sx={{ height: '100%', mt: '20px', flexGrow: 1, display: 'flex', alignItems: 'flex-start' }}>
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Stack
        spacing={2}
        padding={2}
        width={720}
      >
        <TitleField />
      </Stack>
    </Box>
    <Box>
      <Box>form builder</Box>
    </Box>
  </Box>
);
