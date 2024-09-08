import { createSlice } from '@reduxjs/toolkit';

interface loginState {
  value: boolean;
}

const initialState: loginState = {
  value: false,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    showLogin: (state) => {
      state.value = true;
    },
    hideLogin: (state) => {
      state.value = false;
    },
  },
});

export const { showLogin, hideLogin } = loginSlice.actions;

export default loginSlice.reducer;
