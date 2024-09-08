import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { hideRules } from '../redux/slices/rulesSlice';
import { hideProfile } from '../redux/slices/profileSlice';
import { showOptions } from '../redux/slices/dropdownSlice';

const Rules: React.FC = () => {

    const rulesState = useSelector((state: RootState) => state.rules.value);
    const user = useSelector((state: RootState) => state.data);

    const dispatch = useDispatch();

    const cancel = () => {
        if (user.username !== "") {
            if (user.email !== "") {
                dispatch(hideRules());
                dispatch(hideProfile());
                dispatch(showOptions());
            }
        }
    };

    return (
        <>
            {rulesState &&
                <div className="absolute inset-0 flex items-center justify-center h-screen m-10 mt-16 bg-black">
                    <div className="text-gray-900 bg-gray-400 px-4 pb-4 rounded">
                        <h1 className="text-xl font-bold underline text-gray-900 bg-gray-400 p-2 rounded">Rules</h1>
                        <ol className="text-left text-lg font-semibold">
                            <li>1. Hit the smiley before it hides.</li>
                            <li>2. Earn 5 points for a perfect hit.</li>
                            <li>3. Lose 1 point for a missed hit.</li>
                        </ol>
                        <button onClick={cancel} className="text-lg text-right mt-2 px-2 py-1 font-semibold text-gray-900 bg-gray-400 rounded-lg border hover:bg-gray-500">
                            Close
                        </button>
                    </div>
                </div>
            }
        </>
    )
}

export default Rules
