import { configureStore } from '@reduxjs/toolkit';
import dropdownReducer from './slices/dropDownSlice';

export const store = configureStore({
  reducer: {
    dropdown: dropdownReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
