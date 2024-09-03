import { useEffect, useState } from 'react';
import Hole from './Hole';
import Dropdown from './Dropdown';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Board: React.FC = () => {
    const [molePosition, setMolePosition] = useState<number | null>(null);
    const [minutes, setMinutes] = useState<string>("00");
    const [seconds, setSeconds] = useState<string>("00");
    const [milliseconds, setMilliseconds] = useState<string>("00");
    const scoreState = useSelector((state: RootState) => state.score.value)

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

        return () => clearInterval(moleTimer);
    }, []);

    return (<div className='flex justify-center'>
        <div className="flex items-center justify-center px-10">
            <h1 className="text-2xl font-bold text-gray-900 bg-gray-400 p-4 rounded-lg">
                {`${minutes} : ${seconds} : ${milliseconds}`}
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
                {`Score`}
            <h1 className="text-2xl font-bold text-gray-900 bg-gray-400  rounded-lg">
                {`${scoreState}`}
            </h1>
            </h1>
        </div>
    </div>);
};

export default Board;
