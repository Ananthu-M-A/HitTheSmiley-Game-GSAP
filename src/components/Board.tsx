import { useEffect, useState } from 'react';
import Hole from './Hole';
import Dropdown from './Dropdown';

const Board = () => {
    const [molePosition, setMolePosition] = useState<number | null>(null);

    useEffect(() => {
        const updateMole = () => {
            const max = 39;
            const randomNum = Math.floor(Math.random() * (max + 1));
            setMolePosition(randomNum);

            setTimeout(() => {
                setMolePosition(null);
            }, 1000);
        };

        const moleTimer = setInterval(updateMole, 2000);

        return () => clearInterval(moleTimer);
    }, []);

    return (
        <>
            <div id='board' className='bg-gray-700 grid grid-cols-10 text-center p-10 gap-10'>
                {Array.from({ length: 40 }, (_, i) => (
                    <Hole key={i} holeNum={i} molePosition={molePosition} />
                ))}
                <Dropdown />
            </div>
        </>
    );
};

export default Board;
