import { useContext } from 'react';

import { ChangeAppThemeContext } from '../AppThemeContext';

export const useChangeAppTheme = () => useContext(ChangeAppThemeContext);
