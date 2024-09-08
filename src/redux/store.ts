import { configureStore } from '@reduxjs/toolkit';
import dropdownReducer from './slices/dropdownSlice';
import scoreReducer from './slices/scoreSlice';
import timerReducer from './slices/timerSlice';
import startReducer from './slices/startSlice';
import loginReducer from './slices/loginSlice';
import gamerReducer from './slices/gamerSlice';
import gameoverReducer from './slices/gameoverSlice';
import profileReducer from './slices/profileSlice';
import rulesReducer from './slices/rulesSlice';
import dataReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    data: dataReducer,
    score: scoreReducer,
    timer: timerReducer,
    start: startReducer,
    login: loginReducer,
    gamer: gamerReducer,
    rules: rulesReducer,
    gameover: gameoverReducer,
    profile: profileReducer,
    dropdown: dropdownReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;