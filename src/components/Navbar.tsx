import { useDispatch, useSelector } from "react-redux"
import { showOptions } from "../redux/slices/dropDownSlice.ts";
import { stopTimer } from "../redux/slices/timerSlice.ts";
import { RootState } from "../redux/store.ts";
import { hideGamer } from "../redux/slices/gamerSlice.ts";
import Dropdown from "./Dropdown.tsx";

const Navbar: React.FC = () => {
  const gamerState = useSelector((state: RootState) => state.gamer.value);
  const dispatch = useDispatch();

  const dropDownOpen = () => {
    dispatch(stopTimer());
    dispatch(hideGamer());
    dispatch(showOptions());
  }

  return (
    <div className='bg-gray-900 p-0 flex justify-between'>
      <div>
        <h1 className="heading-font text-3xl font-bold p-3">Hit👊The😀Smiley</h1>
      </div>
      <div className="p-3">
        {gamerState &&
          <button onClick={dropDownOpen}
            className="text-gray-400 bg-gray-900 border rounded border-gray-400 text-xl font-bold font-mono p-1 hover:bg-gray-800 hover:text-gray-300 hover:border-gray-300">
            <span className="bg-white rounded-full">👨🏻</span>
            <span className="px-1">Gamer</span>
            <span>⬇️</span>
          </button>}
      </div>
      <Dropdown />
    </div>
  )
}

export default Navbar
