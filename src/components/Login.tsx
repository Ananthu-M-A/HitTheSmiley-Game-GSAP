import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { hideLogin } from '../redux/slices/loginSlice';
import { showOptions } from '../redux/slices/dropdownSlice';
import { updateEmail, updateUsername } from "../redux/slices/userSlice.ts";

const Login: React.FC = () => {

    const loginState = useSelector((state: RootState) => state.login.value);
    const user = useSelector((state: RootState) => state.data);

    const dispatch = useDispatch();

    const login = () => {
        if (user.username !== "") {
            if (user.email !== "") {
                dispatch(hideLogin());
                dispatch(showOptions());
            }
        }
    }

    const quitGame = () => {
        window.open("about:blank", "_self");
        window.close();
    };

    return (
        <>
            {loginState &&
                <div className="absolute inset-0 flex items-center justify-center m-10 bg-black h-screen mt-16">
                    <div className="bg-gray-400 grid px-4 pb-4">
                        <h1 className="text-xl font-bold underline text-gray-900 bg-gray-400 p-4 rounded">Login Now</h1>
                        <label htmlFor="username" className="flex justify-between p-2 text-lg font-semibold text-center">
                            Name  :-
                            <input type="text" name="username" id="username" value={user.username || ''}
                                onChange={(e) => dispatch(updateUsername({ username: e.target.value }))} className='text-center' placeholder='Enter your name'/> 
                        </label>
                        <label htmlFor="email" className="flex justify-between p-2 text-lg font-semibold text-center">
                            Email  :-
                            <input className="text-center"  placeholder='Enter your email'
                                onChange={(e) => dispatch(updateEmail({ email: e.target.value }))}
                                type="text" name="email" id="email" value={user.email} />
                        </label>
                        <div className="flex justify-between">
                            <button onClick={login} className="mx-auto text-lg mt-2 px-2 py-1 font-semibold text-gray-900 bg-gray-400 rounded-lg border hover:bg-gray-500">
                                Login
                            </button>
                            <button onClick={quitGame} className="mx-auto text-lg mt-2 px-2 py-1 font-semibold text-gray-900 bg-gray-400 rounded-lg border hover:bg-gray-500">
                                Quit
                            </button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Login;
