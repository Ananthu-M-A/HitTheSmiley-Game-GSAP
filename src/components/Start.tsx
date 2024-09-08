import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { hideStart } from '../redux/slices/startSlice';
import { resumeTimer } from '../redux/slices/timerSlice';
import { showGamer } from '../redux/slices/gamerSlice';

const Start: React.FC = () => {

    const startState = useSelector((state: RootState) => state.start.value);

    const dispatch = useDispatch();

    const startGame = () => {
        dispatch(hideStart());
        dispatch(resumeTimer(dispatch));
        dispatch(showGamer());
    };

    return (
        <>
            {startState &&
                <div className="absolute inset-0 flex items-center justify-center h-screen m-10 mt-16 bg-black">
                    <button onClick={startGame} className="text-2xl font-bold text-gray-900 bg-gray-400 p-4 rounded-lg">
                        Let's Start
                    </button>
                </div>
            }
        </>
    )
}

export default Start
