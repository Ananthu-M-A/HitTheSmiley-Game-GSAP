import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { hideGameover } from '../redux/slices/gameoverSlice';
import { resetScore } from '../redux/slices/scoreSlice';
import { resetTimer, stopTimer } from '../redux/slices/timerSlice';
import { showStart } from '../redux/slices/startSlice';
import { hideGamer } from '../redux/slices/gamerSlice';
import { showOptions } from '../redux/slices/dropdownSlice';

const Gameover: React.FC = () => {

    const gameoverState = useSelector((state: RootState) => state.gameover.value);    
    const score = useSelector((state: RootState) => state.score);


    const dispatch = useDispatch();

    const restartGame = () => {
        dispatch(hideGameover());
        dispatch(resetScore());
        dispatch(resetTimer());
        dispatch(showStart());
    }

    const mainMenu = () => {
        dispatch(hideGameover());
        dispatch(stopTimer());
        dispatch(resetTimer());
        dispatch(hideGamer());
        dispatch(showOptions());
    }

    return (
        <>
            {gameoverState &&
                <div className="absolute inset-0 flex items-center justify-center h-screen m-10 mt-16 bg-black">
                    <div className="text-gray-900 bg-gray-400 px-4 pb-4 rounded">
                        <h1 className="text-xl font-bold underline text-gray-900 bg-gray-400 p-2 rounded">Game Over</h1>
                        <div className="flex">
                            <h1 className="text-xl font-semibold text-gray-900 bg-gray-400 p-2 rounded">Latest Score :</h1>
                            <h1 className="text-xl font-semibold text-gray-900 bg-gray-400 p-2 rounded">{score.latest}</h1>
                        </div>
                        <div className="flex">
                            <h1 className="text-xl font-semibold text-gray-900 bg-gray-400 p-2 rounded">Highest Score :</h1>
                            <h1 className="text-xl font-semibold text-gray-900 bg-gray-400 p-2 rounded">{score.highest}</h1>
                        </div>
                        <div className="flex gap-4">
                            <button onClick={restartGame} className="text-lg mt-2 px-2 py-1 font-semibold text-gray-900 bg-gray-400 rounded-lg border hover:bg-gray-500 mx-auto">
                                Play Again
                            </button>
                            <button onClick={mainMenu} className="text-lg mt-2 px-2 py-1 font-semibold text-gray-900 bg-gray-400 rounded-lg border hover:bg-gray-500 mx-auto">
                                Main Menu
                            </button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Gameover
