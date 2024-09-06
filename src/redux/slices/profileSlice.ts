import { createSlice } from '@reduxjs/toolkit';

interface profileState {
  value: boolean;
}

const initialState: profileState = {
  value: false,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    showProfile: (state) => {
      state.value = true;
    },
    hideProfile: (state) => {
      state.value = false;
    },
  },
});

export const { showProfile, hideProfile } = profileSlice.actions;

export default profileSlice.reducer;
