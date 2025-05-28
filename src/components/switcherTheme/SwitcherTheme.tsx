import {
  useAppDispatch,
  useAppSelector,
} from "../../shared/services/hooks/useTypedSelector";
import { changeTheme } from "../../store/movies/movies.slice";

const SwitcherTheme = () => {
  const theme = useAppSelector((state) => state.movies.theme);
  const dispatch = useAppDispatch();

  const handlerChangeTheme = () => {
    if (theme) {
      dispatch(changeTheme(!theme));
      document.body.classList.add("dark");
    } else {
      dispatch(changeTheme(!theme));
      document.body.classList.remove("dark");
    }
  };

  return (
    <div className="mr-[10px]">
      <label className="relative inline-block w-20 h-10 rounded-full">
        <input
          checked={theme}
          onChange={handlerChangeTheme}
          type="checkbox"
          className="peer opacity-0 w-0 h-0"
        />
        <span
          className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-[#1589B8] rounded-full duration-300 before:content-[''] before:absolute before:w-8 before:h-8 before:bottom-1 before:left-1 before:rounded-full
                before:bg-white before:duration-300 peer-checked:before:translate-x-10 peer-checked:bg-[#E7DE47]"
        />
      </label>
    </div>
  );
};

export default SwitcherTheme;
