import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Provider } from 'react-redux';

import { Header } from '~components/layout';
import { BuilderPage } from '~pages';
import { store } from '~utils/store';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#63e29b',
    },
    secondary: {
      main: '#63e2b7',
    },
    text: {
      primary: 'rgba(255, 255, 255, 0.9)',
    },
    info: {
      main: '#70c0e8',
    },
    warning: {
      main: '#f2c97d',
    },
    error: {
      main: '#e88080',
    },
    success: {
      main: '#63e2b7',
    },
  },
});

export const App = () => (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <main>
          <BuilderPage />
        </main>
      </ThemeProvider>
    </Provider>
  </LocalizationProvider>
);
