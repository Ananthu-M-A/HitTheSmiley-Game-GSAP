import { configureStore } from '@reduxjs/toolkit';
import dropdownReducer from './slices/dropDownSlice';
import scoreReducer from './slices/scoreSlice';
import timerReducer from './slices/timerSlice';

export const store = configureStore({
  reducer: {
    dropdown: dropdownReducer,
    score: scoreReducer,
    timer: timerReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;