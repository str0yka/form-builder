import { Box, Container, Paper } from '@mui/material';

import { BuilderController, BuilderElements } from './components';

export const BuilderPage = () => (
  <Box
    sx={{
      padding: 2,
      flexGrow: 1,
      display: 'flex',
      gap: 2,
    }}
  >
    <Container
      fixed
      maxWidth="md"
      sx={{ position: 'relative' }}
    >
      <Paper
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          padding: 2,
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          '::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        <BuilderElements />
      </Paper>
    </Container>
    <Paper sx={{ padding: 2, width: 400 }}>
      <BuilderController />
    </Paper>
  </Box>
);
