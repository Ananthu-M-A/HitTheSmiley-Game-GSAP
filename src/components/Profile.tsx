import React from 'react'
import { updateEmail, updateUsername } from "../redux/slices/userSlice.ts";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { hideRules } from '../redux/slices/rulesSlice.ts';
import { hideProfile } from '../redux/slices/profileSlice.ts';
import { showOptions } from '../redux/slices/dropdownSlice.ts';

const Profile: React.FC = () => {

    const profileState = useSelector((state: RootState) => state.profile.value);
    const score = useSelector((state: RootState) => state.score);
    const user = useSelector((state: RootState) => state.data);

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
    }

    const logout = () => {
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
            {profileState &&
                <div className="absolute inset-0 flex items-center justify-center m-10 bg-black h-screen mt-16">
                    <div className="bg-gray-400 grid px-4 pb-4">
                        <h1 className="text-xl font-bold underline text-gray-900 bg-gray-400 p-4 rounded">Profile</h1>
                        <label htmlFor="username" className="flex justify-between p-2 text-lg font-semibold">
                            Name  :-
                            <input type="text" name="username" id="username" value={user.username || ''}
                                onChange={(e) => dispatch(updateUsername({ username: e.target.value }))} className='text-center' placeholder='Enter your name'/>
                        </label>
                        <label htmlFor="email" className="flex justify-between p-2 text-lg font-semibold">
                            Email  :-
                            <input className="text-center" placeholder='Enter your email'
                                onChange={(e) => dispatch(updateEmail({ email: e.target.value }))}
                                type="text" name="email" id="email" value={user.email} />
                        </label>
                        <button onClick={update} className="w-1/4 mx-auto text-lg mt-2 px-2 py-1 font-semibold text-gray-900 bg-gray-400 rounded-lg border hover:bg-gray-500">
                            Update
                        </button>
                        <h1 className="text-xl font-semibold underline text-gray-900 bg-gray-400 p-4 rounded">Score</h1>
                        <label htmlFor="score" className="flex justify-between p-2 text-lg font-semibold">
                            Latest :-
                            <input className="text-center" type="text" name="score" id="score" value={score.latest} readOnly />
                        </label>
                        <label htmlFor="h-score" className="flex justify-between p-2 text-lg font-semibold">
                            Highest :-
                            <input className="text-center" type="text" name="h-score" id="h-score" value={score.highest} readOnly />
                        </label>
                        <button onClick={logout} className="w-1/4 mx-auto text-lg mt-2 px-2 py-1 font-semibold text-gray-900 bg-gray-400 rounded-lg border hover:bg-gray-500">
                            Logout
                        </button>
                    </div>
                </div>
            }
        </>
    )
}

export default Profile
