import { useEffect, useState } from 'react';
import Hole from './Hole';
import Dropdown from './Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { showOptions } from '../redux/slices/dropDownSlice';

const Board: React.FC = () => {
    const [molePosition, setMolePosition] = useState<number | null>(null);
    const scoreState = useSelector((state: RootState) => state.score.value);
    const timerState = useSelector((state: RootState) => state.timer.value);
    
    const dispatch = useDispatch();

    useEffect(() => {
        const updateMole = () => {
            const max = 15;
            const randomNum = Math.floor(Math.random() * (max + 1));
            setMolePosition(randomNum);
            
            setTimeout(() => {
                setMolePosition(null);
            }, 1000);
        };
        
        const moleTimer = setInterval(updateMole, 2000);
        dispatch(showOptions());
        
        return () => clearInterval(moleTimer);
    }, []);

    return (<div className='flex justify-center'>
        <div className="flex items-center justify-center px-10">
            <h1 className="text-2xl font-bold text-gray-900 bg-gray-400 p-4 rounded-lg">
                {`${timerState}`}
            </h1>
        </div>
        <div id='board' className='w-1/2 bg-gray-700 grid grid-cols-4 text-center p-10 h-screen mx-auto'>
            {Array.from({ length: 16 }, (_, i) => (
                <Hole key={i} holeNum={i} molePosition={molePosition} />
            ))}
            <Dropdown />
        </div>
        <div className="flex items-center justify-center px-10 text-center">
            <h1 className="text-2xl font-bold text-gray-900 bg-gray-400 p-4 rounded-lg">
                SCORE
                <h1 className="text-2xl font-bold text-gray-900 bg-gray-400  rounded-lg">
                    {`${scoreState}`}
                </h1>
            </h1>
        </div>
    </div>);
};

export default Board;
