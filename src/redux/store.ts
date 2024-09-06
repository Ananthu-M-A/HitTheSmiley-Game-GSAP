import { configureStore } from '@reduxjs/toolkit';
import dropdownReducer from './slices/dropDownSlice';
import scoreReducer from './slices/scoreSlice';
import timerReducer from './slices/timerSlice';
import startReducer from './slices/startSlice';
import gamerReducer from './slices/gamerSlice';
import profileReducer from './slices/profileSlice';
import rulesReducer from './slices/rulesSlice';
import dataReducer from './slices/dataSlice';

export const store = configureStore({
  reducer: {
    data: dataReducer,
    score: scoreReducer,
    timer: timerReducer,
    start: startReducer,
    gamer: gamerReducer,
    rules: rulesReducer,
    profile: profileReducer,
    dropdown: dropdownReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;