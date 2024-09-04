import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux/store.ts"
import { switchState } from "../redux/slices/dropDownSlice.ts";
import { resetTimer, resumeTimer } from "../redux/slices/timerSlice.ts";
import { resetScore } from "../redux/slices/scoreSlice.ts";
import { useState } from "react";

const Dropdown: React.FC = () => {
    const dropdownState = useSelector((state: RootState) => state.dropdown.value);
    const dispatch = useDispatch();
    const [showButton, setShowButton] = useState<boolean>(false);
    const [showRules, setShowRules] = useState<boolean>(false);

    const startGame = () => {
        setShowButton(false);
        dispatch(resumeTimer(dispatch));
    }

    const newGame = () => {
        dispatch(resetScore());
        dispatch(resetTimer());
        setShowButton(true);
        dispatch(switchState());
    }

    const resume = () => {
        dispatch(resumeTimer(dispatch));
        dispatch(switchState());
    }

    const rules = () => {
        setShowRules(true);
    }

    const cancel = () => {
        setShowRules(false);
    }

    const quitNow = () => {
        window.open("about:blank", "_self");
        window.close();
    }

    return (<>
        {dropdownState &&
            <div className="absolute inset-0 flex items-center justify-center m-10 bg-black h-screen mt-16">
                <ul className="bg-gray-400 w-1/3 h-2/5 text-center border">
                    <li onClick={newGame}
                        className="text-xl font-semibold p-1 border"><button>New Game</button></li>
                    <li onClick={resume}
                        className="text-xl font-semibold p-1 border"><button>Resume</button></li>
                    <li
                        className="text-xl font-semibold p-1 border"><button>Go to Profile</button></li>
                    <li onClick={rules}
                        className="text-xl font-semibold p-1 border"><button>Rules</button></li>
                    <li onClick={quitNow}
                        className="text-xl font-semibold p-1 border"><button>Quit Now</button></li>
                </ul>
            </div>}
        {showButton &&
            <div className="absolute inset-0 flex items-center justify-center h-screen m-10 mt-16 bg-black">
                <button onClick={startGame}
                    className="text-2xl font-bold text-gray-900 bg-gray-400 p-4 rounded-lg">
                    Let's Start
                </button>
            </div>}
        {showRules &&
            <div className="absolute inset-0 flex items-center justify-center h-screen m-10 mt-16 bg-black">
                <ol className="text-gray-900 bg-gray-400 px-4 pb-4 rounded">
                    <h1 className="text-xl font-bold underline text-gray-900 bg-gray-400 p-2 rounded">Rules</h1>
                    <li className="text-left font-semibold">1. Hit the smiley before it hides.</li>
                    <li className="text-left font-semibold">2. Earn 5 points for a perfect hit.</li>
                    <li className="text-left font-semibold">3. Lose 1 point for a missed hit.</li>
                    <button onClick={cancel}
                        className="text-md text-right mt-2 px-2 py-1 font-bold text-gray-900 bg-gray-400 rounded-lg border hover:bg-gray-500">
                        Close
                    </button>
                </ol>
            </div>}
    </>)
}

export default Dropdown
