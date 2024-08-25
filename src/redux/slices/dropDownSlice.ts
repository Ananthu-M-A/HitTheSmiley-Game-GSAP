import { createSlice } from '@reduxjs/toolkit';

interface dropdownState {
  value: boolean;
}

const initialState: dropdownState = {
  value: false,
};

export const dropdownSlice = createSlice({
  name: 'dropdown',
  initialState,
  reducers: {
    switchState: (state) => {
      state.value = !state.value;
    },
  },
});

export const { switchState } = dropdownSlice.actions;

export default dropdownSlice.reducer;
