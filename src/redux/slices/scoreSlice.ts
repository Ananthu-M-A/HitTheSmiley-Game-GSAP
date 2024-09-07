import { createSlice } from '@reduxjs/toolkit';

interface scoreState {
    latest: number;
    highest: number;
}

const initialState: scoreState = {
    latest: 0,
    highest: 0
};

const updateHighest = (newScore: number, score: scoreState) => {
    if (newScore > score.highest) {
        score.highest = newScore;
    }
}

export const scoreSlice = createSlice({
    name: 'score',
    initialState,
    reducers: {
        resetScore: (score) => {
            updateHighest(score.latest, score);
            score.latest = 0;
        },
        increaseScore: (score) => {
            score.latest = score.latest + 5;
            updateHighest(score.latest, score);
        },
        decreaseScore: (score) => {
            if ((score.latest - 1) >= 0) {
                score.latest = score.latest - 1;
            }
            updateHighest(score.latest, score);
        },
    },
});

export const { resetScore, increaseScore, decreaseScore } = scoreSlice.actions;

export default scoreSlice.reducer;
