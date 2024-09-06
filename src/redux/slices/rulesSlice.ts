import { createSlice } from '@reduxjs/toolkit';

interface rulesState {
  value: boolean;
}

const initialState: rulesState = {
  value: false,
};

export const rulesSlice = createSlice({
  name: 'rules',
  initialState,
  reducers: {
    showRules: (state) => {
      state.value = true;
    },
    hideRules: (state) => {
      state.value = false;
    },
  },
});

export const { showRules, hideRules } = rulesSlice.actions;

export default rulesSlice.reducer;
