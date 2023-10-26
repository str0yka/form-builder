import { createContext } from 'react';

import { THEME_DEFAULT } from './constants';

export const AppThemeContext = createContext<Theme>(THEME_DEFAULT);

export const ChangeAppThemeContext = createContext<ChangeTheme>(() => {});
