import { MouseEvent } from 'react';
import Smiley from './Smiley';
import { useDispatch } from 'react-redux';
import { decreaseScore } from '../redux/slices/scoreSlice';

interface HoleProps {
    holeNum: number;
    molePosition: number | null;
}

const Hole: React.FC<HoleProps> = ({ holeNum, molePosition }) => {
    const dispatch = useDispatch();
    const hitEmptyHole = (e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        dispatch(decreaseScore());
    }

    return (
        <div className='bg-gray-900 py-9 border-4 border-red-900 rounded-full h-max' id='empty_hole'
            onClick={(e) => hitEmptyHole(e)}>
            <Smiley holeNum={holeNum} molePosition={molePosition} />
        </div>
    );
};

export default Hole;
