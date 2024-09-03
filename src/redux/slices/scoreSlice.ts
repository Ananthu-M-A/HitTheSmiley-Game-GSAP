import { createSlice } from '@reduxjs/toolkit';

interface scoreState {
    value: number;
}

const initialState: scoreState = {
    value: 0,
};

export const scoreSlice = createSlice({
    name: 'score',
    initialState,
    reducers: {
        increaseScore: (state) => {
            state.value = state.value + 5;
        },
        decreaseScore: (state) => {
            state.value = state.value - 1;
        },
    },
});

export const { increaseScore, decreaseScore } = scoreSlice.actions;

export default scoreSlice.reducer;
