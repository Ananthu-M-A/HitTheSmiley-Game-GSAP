import { createSlice } from '@reduxjs/toolkit';

interface startState {
  value: boolean;
}

const initialState: startState = {
  value: false,
};

export const startSlice = createSlice({
  name: 'start',
  initialState,
  reducers: {
    showStart: (state) => {
      state.value = true;
    },
    hideStart: (state) => {
      state.value = false;
    },
  },
});

export const { showStart, hideStart } = startSlice.actions;

export default startSlice.reducer;
