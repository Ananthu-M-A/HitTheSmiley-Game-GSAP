import { createSlice } from '@reduxjs/toolkit';

interface dropdownState {
  value: boolean;
}

const initialState: dropdownState = {
  value: true,
};

export const dropdownSlice = createSlice({
  name: 'dropdown',
  initialState,
  reducers: {
    showOptions: (state) => {
      state.value = true;
    },
    hideOptions: (state) => {
      state.value = false;
    },
  },
});

export const { showOptions, hideOptions } = dropdownSlice.actions;

export default dropdownSlice.reducer;
