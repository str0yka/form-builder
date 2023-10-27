import { configureStore } from '@reduxjs/toolkit';

import { builderReducer } from './builder/builderSlice';

export const store = configureStore({
  reducer: {
    builder: builderReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
