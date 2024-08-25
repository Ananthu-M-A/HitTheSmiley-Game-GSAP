import { MouseEvent } from 'react';
import Smiley from './Smiley';

interface HoleProps {
    holeNum: number;
    molePosition: number | null;
}

const Hole = ({ holeNum, molePosition }: HoleProps) => {
    const hitEmptyHole = (e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
    }

    return (
        <div className='bg-gray-900 py-3 border-4 border-red-900 rounded-full' id='empty_hole'
            onClick={(e) => hitEmptyHole(e)}>
            <Smiley holeNum={holeNum} molePosition={molePosition} />
        </div>
    );
};

export default Hole;
