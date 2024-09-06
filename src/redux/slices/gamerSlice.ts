import { createSlice } from '@reduxjs/toolkit';

interface gamerState {
  value: boolean;
}

const initialState: gamerState = {
  value: false,
};

export const gamerSlice = createSlice({
  name: 'gamer',
  initialState,
  reducers: {
    showGamer: (state) => {
      state.value = true;
    },
    hideGamer: (state) => {
      state.value = false;
    },
  },
});

export const { showGamer, hideGamer } = gamerSlice.actions;

export default gamerSlice.reducer;
