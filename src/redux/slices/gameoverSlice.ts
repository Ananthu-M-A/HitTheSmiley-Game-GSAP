import { createSlice } from '@reduxjs/toolkit';

interface gameoverState {
  value: boolean;
}

const initialState: gameoverState = {
  value: false,
};

export const gameoverSlice = createSlice({
  name: 'gameover',
  initialState,
  reducers: {
    showGameover: (state) => {
      state.value = true;
    },
    hideGameover: (state) => {
      state.value = false;
    },
  },
});

export const { showGameover, hideGameover } = gameoverSlice.actions;

export default gameoverSlice.reducer;
