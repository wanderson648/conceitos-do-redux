import { configureStore } from '@reduxjs/toolkit';

import useReducer from './reducers/useReducer';
import themeResucer from './reducers/themeResucer';


export const store = configureStore({
  reducer: {
    user: useReducer,
    theme: themeResucer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
