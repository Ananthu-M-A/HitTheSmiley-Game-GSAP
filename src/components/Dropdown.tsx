import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux/store.ts"
import { hideOptions } from "../redux/slices/dropdownSlice.ts";
import { resetTimer, resumeTimer } from "../redux/slices/timerSlice.ts";
import { resetScore } from "../redux/slices/scoreSlice.ts";
import { hideStart, showStart } from "../redux/slices/startSlice.ts";
import { showGamer } from "../redux/slices/gamerSlice.ts";
import { showProfile } from "../redux/slices/profileSlice.ts";
import { showRules } from "../redux/slices/rulesSlice.ts";
import Login from "./Login.tsx";
import Gameover from "./Gameover.tsx";
import Profile from "./Profile.tsx";
import Rules from "./Rules.tsx";
import Start from "./Start.tsx";

const Dropdown: React.FC = () => {
    const dropdownState = useSelector((state: RootState) => state.dropdown.value);
    const timerState = useSelector((state: RootState) => state.timer.time);

    const dispatch = useDispatch();

    const update = () => {
        // const localData = JSON.parse(localStorage.getItem(`${user.email}`) || "{}");
        // if (Object.keys(localData).length) {
        //     localStorage.setItem(`${user.email}`, JSON.stringify({
        //         username: localData.username || user.username,
        //         email: user.email,
        //         score: score.latest,
        //         highscore: Math.max(localData.highscore || 0, score.highest),
        //     }));
        // } else {
        //     localStorage.setItem(`${user.email}`, JSON.stringify({
        //         username: user.username,
        //         email: user.email,
        //         score: score.latest,
        //         highscore: Math.max(localData.highscore || 0, score.highest),
        //     }));
        // }
    };

    const newGame = () => {
        dispatch(resetScore());
        dispatch(resetTimer());
        dispatch(showStart());
        dispatch(hideOptions());
    };

    const resume = () => {
        dispatch(hideOptions());
        dispatch(showGamer());
        dispatch(resumeTimer(dispatch));
    };

    const profile = () => {
        dispatch(hideOptions());
        dispatch(hideStart());
        dispatch(showProfile());
    };

    const rules = () => {
        dispatch(showRules());
    };

    const quitGame = () => {
        update();
        window.open("about:blank", "_self");
        window.close();
    };

    return (
        <>
            {dropdownState &&
                <div className="absolute inset-0 flex items-center justify-center m-10 bg-black h-screen mt-16">
                    <ul className="bg-gray-400 w-1/3 h-2/5 text-center border">
                        <li className="text-xl font-bold p-1 border">Options</li>
                        <li onClick={newGame} className="text-xl font-semibold p-1 border">
                            <button>New Game</button>
                        </li>
                        {timerState !== "00:00:00" &&
                            <li onClick={resume} className="text-xl font-semibold p-1 border">
                                <button>Resume</button>
                            </li>
                        }
                        <li onClick={profile} className="text-xl font-semibold p-1 border">
                            <button>Go to Profile</button>
                        </li>
                        <li onClick={rules} className="text-xl font-semibold p-1 border">
                            <button>Rules</button>
                        </li>
                        <li onClick={quitGame} className="text-xl font-semibold p-1/2 border">
                            <button>Quit Game</button>
                        </li>
                    </ul>
                </div>
            }
            <Start />
            <Rules />
            <Profile />
            <Gameover />
            <Login />
        </>
    );
}

export default Dropdown;
