import { createSlice } from '@reduxjs/toolkit';

interface TimerState {
    time: string;
}

const initialState: TimerState = {
    time: "00:00:00",
};

let timerId: number | null = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function update(dispatch: any) {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60)
        .toString()
        .padStart(2, "00");
    let seconds = Math.floor((elapsedTime / 1000) % 60)
        .toString()
        .padStart(2, "00");
    let milliseconds = Math.floor((elapsedTime % 1000) / 10)
        .toString()
        .padStart(2, "00");

    const timerValue = `${minutes}:${seconds}:${milliseconds}`;
    dispatch(scoreSlice.actions.setTimerValue(timerValue));
}

export const scoreSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        resumeTimer: (_, action) => {
            if (!isRunning) {
                startTime = Date.now() - elapsedTime;
                timerId = setInterval(() => update(action.payload), 10);
                isRunning = true;
            }
        },
        stopTimer: () => {
            if (isRunning && timerId) {
                clearInterval(timerId);
                timerId = null;
                isRunning = false;
            }
        },
        resetTimer: (timer) => {
            if (timerId) {
                clearInterval(timerId);
                timerId = null;
            }
            isRunning = false;
            elapsedTime = 0;
            timer.time = "00:00:00";
        },
        setTimerValue: (timer, action) => {
            timer.time = action.payload;
        },
    },
});

export const { resumeTimer, stopTimer, resetTimer, setTimerValue } = scoreSlice.actions;

export default scoreSlice.reducer;
