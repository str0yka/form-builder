import { createTheme, ThemeProvider } from '@mui/material';
import { useState } from 'react';

import { AppThemeContext, ChangeAppThemeContext } from './AppThemeContext';
import { THEME_DEFAULT } from './constants';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#63e29b',
    },
    secondary: {
      main: '#63e2b7',
    },
    background: {
      default: '#101014',
      paper: '#101014',
    },
    text: {
      primary: 'rgba(255 255 255 / 90%)',
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

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#18a058',
    },
    secondary: {
      main: '#4ac38d',
    },
    info: {
      main: '#2080f0',
    },
    warning: {
      main: '#f0a020',
    },
    error: {
      main: '#d03050',
    },
    success: {
      main: '#63e2b7',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
  },
});

interface AppThemeProviderProps {
  children?: React.ReactNode;
}

export const AppThemeProvider: React.FC<AppThemeProviderProps> = ({ children }) => {
  const [theme, changeTheme] = useState<Theme>(THEME_DEFAULT);

  return (
    <AppThemeContext.Provider value={theme}>
      <ChangeAppThemeContext.Provider value={changeTheme}>
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>{children}</ThemeProvider>
      </ChangeAppThemeContext.Provider>
    </AppThemeContext.Provider>
  );
};
