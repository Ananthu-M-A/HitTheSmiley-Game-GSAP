import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux/store.ts"
import { hideOptions } from "../redux/slices/dropDownSlice.ts";
import { resetTimer, resumeTimer } from "../redux/slices/timerSlice.ts";
import { resetScore } from "../redux/slices/scoreSlice.ts";
import { hideStart, showStart } from "../redux/slices/startSlice.ts";
import { showGamer } from "../redux/slices/gamerSlice.ts";
import { hideProfile, showProfile } from "../redux/slices/profileSlice.ts";
import { hideRules, showRules } from "../redux/slices/rulesSlice.ts";
import { updateProfile } from "../redux/slices/dataSlice.ts";

const Dropdown: React.FC = () => {
    const dropdownState = useSelector((state: RootState) => state.dropdown.value);
    const timerState = useSelector((state: RootState) => state.timer.value);
    const startState = useSelector((state: RootState) => state.start.value);
    const rulesState = useSelector((state: RootState) => state.rules.value);
    const profileState = useSelector((state: RootState) => state.profile.value);
    const dataState = useSelector((state: RootState) => state.data);

    const dispatch = useDispatch();
    const startGame = () => {
        dispatch(hideStart());
        dispatch(resumeTimer(dispatch));
        dispatch(showGamer());
    }

    const newGame = () => {
        dispatch(resetScore());
        dispatch(resetTimer());
        dispatch(showStart());
        dispatch(hideOptions());
    }

    const resume = () => {
        dispatch(hideOptions());
        dispatch(showGamer());
        dispatch(resumeTimer(dispatch));
    }

    const profile = () => {
        dispatch(hideOptions());
        dispatch(hideStart());
        dispatch(showProfile());
    }

    const rules = () => {
        dispatch(showRules());
    }

    const cancel = () => {
        dispatch(hideRules());
        dispatch(hideProfile());
    }

    const quitNow = () => {
        window.open("about:blank", "_self");
        window.close();
    }

    const update = () => {
        localStorage.set(`${dataState.email}`,{
            username: `${dataState.username}`,
            email: `${dataState.email}`,
            score: `${dataState.score}`,
            highscore: `${dataState.highscore}`,
        });
    }

    return (<>
        {dropdownState &&
            <div className="absolute inset-0 flex items-center justify-center m-10 bg-black h-screen mt-16">
                <ul className="bg-gray-400 w-1/3 h-2/5 text-center border">
                    <li className="text-xl font-bold p-1 border">Options</li>
                    <li onClick={newGame}
                        className="text-xl font-semibold p-1 border"><button>New Game</button></li>
                    {timerState !== "00:00:00" &&
                        <li onClick={resume}
                            className="text-xl font-semibold p-1 border"><button>Resume</button></li>}
                    <li onClick={profile}
                        className="text-xl font-semibold p-1 border"><button>Go to Profile</button></li>
                    <li onClick={rules}
                        className="text-xl font-semibold p-1 border"><button>Rules</button></li>
                    <li onClick={quitNow}
                        className="text-xl font-semibold p-1/2 border"><button>Quit Now</button></li>
                </ul>
            </div >}
        {
            startState &&
            <div className="absolute inset-0 flex items-center justify-center h-screen m-10 mt-16 bg-black">
                <button onClick={startGame}
                    className="text-2xl font-bold text-gray-900 bg-gray-400 p-4 rounded-lg">
                    Let's Start
                </button>
            </div>
        }
        {
            rulesState &&
            <div className="absolute inset-0 flex items-center justify-center h-screen m-10 mt-16 bg-black">
                <ol className="text-gray-900 bg-gray-400 px-4 pb-4 rounded">
                    <h1 className="text-xl font-bold underline text-gray-900 bg-gray-400 p-2 rounded">Rules</h1>
                    <li className="text-left text-lg font-semibold">
                        1. Hit the smiley before it hides.</li>
                    <li className="text-left text-lg font-semibold">
                        2. Earn 5 points for a perfect hit.</li>
                    <li className="text-left text-lg font-semibold">
                        3. Lose 1 point for a missed hit.</li>
                    <button onClick={cancel}
                        className="text-lg text-right mt-2 px-2 py-1 font-semibold text-gray-900 bg-gray-400 rounded-lg border hover:bg-gray-500">
                        Close
                    </button>
                </ol>
            </div>
        }
        {
            profileState &&
            <div className="absolute inset-0 flex items-center justify-center m-10 bg-black h-screen mt-16">
                <div className="bg-gray-400 grid px-4 pb-4">
                    <h1 className="text-xl font-bold underline text-gray-900 bg-gray-400 p-4 rounded">Profile</h1>
                    <label htmlFor="username" className="flex justify-between p-2 text-lg font-semibold">
                        Name  :-
                        <input className="text-center"
                            onChange={(e) => { dispatch(updateProfile(e.target.value)) }}
                            type="text" name="username" id="username" value={dataState.username} />
                    </label>
                    <label htmlFor="email" className="flex justify-between p-2 text-lg font-semibold">
                        Email  :-
                        <input className="text-center"
                            onChange={(e) => { dispatch(updateProfile(e.target.value)) }}
                            type="text" name="email" id="email" value={dataState.email} />
                    </label>
                    <button onClick={update}
                        className="w-1/4 mx-auto text-lg mt-2 px-2 py-1 font-semibold text-gray-900 bg-gray-400 rounded-lg border hover:bg-gray-500">
                        Update
                    </button>
                    <h1 className="text-xl font-semibold underline text-gray-900 bg-gray-400 p-4 rounded">Score</h1>
                    <label htmlFor="score" className="flex justify-between p-2 text-lg font-semibold">
                        Latest :-
                        <input className="text-center"
                            type="text" name="score" id="score" value={dataState.score} />
                    </label>
                    <label htmlFor="h-score" className="flex justify-between p-2 text-lg font-semibold">
                        Highest :-
                        <input className="text-center"
                            type="text" name="h-score" id="h-score" value={dataState.highscore} />
                    </label>
                    <button onClick={cancel}
                        className="w-1/4 mx-auto text-lg mt-2 px-2 py-1 font-semibold text-gray-900 bg-gray-400 rounded-lg border hover:bg-gray-500">
                        Close
                    </button>
                </div>
            </div>
        }
    </>)
}

export default Dropdown
