import { createSlice } from '@reduxjs/toolkit';

type Theme = 'light' | 'dark';

interface ThemeState {
  mode: Theme;
}

const initialState: ThemeState = {
  mode: 'dark',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchTheme: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
  },
});

export const themeReducer = themeSlice.reducer;

export const themeActions = themeSlice.actions;
