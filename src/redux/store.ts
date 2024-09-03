import { configureStore } from '@reduxjs/toolkit';
import dropdownReducer from './slices/dropDownSlice';
import scoreReducer from './slices/scoreSlice';

export const store = configureStore({
  reducer: {
    dropdown: dropdownReducer,
    score: scoreReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;