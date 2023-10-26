import { useContext } from 'react';

import { AppThemeContext } from '../AppThemeContext';

export const useAppTheme = () => useContext(AppThemeContext);
