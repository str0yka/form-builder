type Theme = 'light' | 'dark';
type ChangeTheme = (theme: Theme | ((theme: Theme) => Theme)) => void;
