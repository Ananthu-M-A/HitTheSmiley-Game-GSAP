import { createSlice } from '@reduxjs/toolkit';

interface DataState {
    username: string;
    email: string;
    score: number;
    highscore: number;
}

const initialState: DataState = {
    username: "",
    email: "",
    score: 0,
    highscore: 0
};



export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        updateProfile: (state, action)=>{
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.score = action.payload.score;
            state.highscore = action.payload.highscore;
        }
    },
});

export const { updateProfile } = dataSlice.actions;

export default dataSlice.reducer;
