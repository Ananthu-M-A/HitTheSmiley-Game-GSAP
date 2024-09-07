import { createSlice } from '@reduxjs/toolkit';

interface UserState {
    username: string;
    email: string;
}

const initialState: UserState = {
    username: "",
    email: "",
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUsername: (user, action) => {
            user.username = action.payload.username;
        },
        updateEmail: (user, action) => {
            user.email = action.payload.email;
        },
    },
});

export const { updateUsername, updateEmail } = userSlice.actions;

export default userSlice.reducer;
