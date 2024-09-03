import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux/store.ts"
import { switchState } from "../redux/slices/dropDownSlice.ts";

const Dropdown: React.FC = () => {
    const dropdownState = useSelector((state: RootState) => state.dropdown.value);
    const dispatch = useDispatch();
    return (<>
        {dropdownState &&
            <div className="absolute inset-0 flex items-center justify-center">
                <ul className="bg-gray-400 w-1/3 h-2/5 text-center border">
                    <li className="text-xl font-semibold p-1 border"><button>Continue</button></li>
                    <li className="text-xl font-semibold p-1 border"><button>New Game</button></li>
                    <li className="text-xl font-semibold p-1 border"><button>Go to Profile</button></li>
                    <li onClick={() => { dispatch(switchState()) }}
                        className="text-xl font-semibold p-1 border"><button>Cancel</button></li>
                    <li className="text-xl font-semibold p-1 border"><button>Quit Now</button></li>
                </ul>
            </div>}
    </>)
}

export default Dropdown
