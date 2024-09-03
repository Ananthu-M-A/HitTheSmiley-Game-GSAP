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
        resetScore: (state) => {
            state.value = 0;
        },
        increaseScore: (state) => {
            state.value = state.value + 5;
        },
        decreaseScore: (state) => {
            if ((state.value - 1) >= 0) {
                state.value = state.value - 1;
            }
        },
    },
});

export const { resetScore, increaseScore, decreaseScore } = scoreSlice.actions;

export default scoreSlice.reducer;
