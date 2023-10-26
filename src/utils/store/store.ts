import { configureStore } from '@reduxjs/toolkit';

import { themeReducer } from './theme';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof store.getState>;
