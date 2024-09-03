import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux/store.ts"
import { switchState } from "../redux/slices/dropDownSlice.ts";
import { resetTimer, resumeTimer } from "../redux/slices/timerSlice.ts";
import { resetScore } from "../redux/slices/scoreSlice.ts";

const Dropdown: React.FC = () => {
    const dropdownState = useSelector((state: RootState) => state.dropdown.value);
    const dispatch = useDispatch();

    const newGame = () => {
        dispatch(resetScore());
        dispatch(resetTimer());
        dispatch(resumeTimer(dispatch));
        dispatch(switchState());
    }

    const resume = () => {
        dispatch(resumeTimer(dispatch));
        dispatch(switchState());
    }

    const quitNow = () => {
        window.open("about:blank", "_self");
        window.close();
    }

    return (<>
        {dropdownState &&
            <div className="absolute inset-0 flex items-center justify-center m-10">
                <ul className="bg-gray-400 w-1/3 h-2/5 text-center border">
                    <li onClick={newGame}
                        className="text-xl font-semibold p-1 border"><button>New Game</button></li>
                    <li onClick={resume}
                        className="text-xl font-semibold p-1 border"><button>Resume</button></li>
                    <li
                        className="text-xl font-semibold p-1 border"><button>Go to Profile</button></li>
                    <li onClick={quitNow}
                        className="text-xl font-semibold p-1 border"><button>Quit Now</button></li>
                </ul>
            </div>}
    </>)
}

export default Dropdown
