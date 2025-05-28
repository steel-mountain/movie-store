import { Dispatch, FC, SetStateAction, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import closeMenuWhite from "../../shared/assets/images/icon-close-menu-white.svg";
import closeMenu from "../../shared/assets/images/icon-close-menu.svg";
import searchSvg from "../../shared/assets/images/search.svg";
import {
  useAppDispatch,
  useAppSelector,
} from "../../shared/services/hooks/useTypedSelector";
import { logout } from "../../store/movies/auth.slice";
import { changeNewPage } from "../../store/movies/movies.slice";
import { Button } from "../header/Header";
import { NavItem, SwitcherTheme } from "../index";

interface MobileMenuProps {
  isOpen: boolean;
  setIsMobileMenu: Dispatch<SetStateAction<boolean>>;
}

export const MobileMenu: FC<MobileMenuProps> = ({
  isOpen,
  setIsMobileMenu,
}) => {
  const [search, setSearch] = useState("");
  const isAuth = Boolean(useAppSelector((state) => state.auth.data));
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.movies.theme);

  const handleSearch = () => {
    if (search.trim()) {
      navigate(`/search?query=${search}`);
      dispatch(changeNewPage(1));
    } else {
      navigate("/movies");
    }
  };

  const onClickLogout = () => {
    if (window.confirm("Вы действительно хотите выйти?")) {
      dispatch(logout());
    }
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10 transition-transform transform ${
          isOpen ? "flex" : "hidden"
        } block ll:hidden`}
        onClick={() => setIsMobileMenu(!isOpen)}
      />
      <div
        className={`transition-all duration-1000 fixed right-0 top-0 w-[55%] bg-white z-20 justify-center min-h-[150vh] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } dark:bg-[#0B0C0E] block ll:hidden`}
      >
        <div className="flex justify-end mt-[25px] mr-4">
          <img
            onClick={() => setIsMobileMenu(!isOpen)}
            className="w-[25px] h-[25px] cursor-pointer"
            src={theme ? closeMenu : closeMenuWhite}
            alt="menu"
          />
        </div>
        <nav className=" my-8 mx-5 space-y-5 text-lg w-full">
          <div className="flex flex-wrap ml-[10px] gap-[10px]">
            {isAuth ? (
              <>
                <Link to="auth/login">
                  <Button onClickLogout={onClickLogout} text="Выход" isAuth />
                </Link>
              </>
            ) : (
              <>
                <Link to="auth/login">
                  <Button text="Вход" />
                </Link>
                <Link to="auth/register">
                  <Button text="Регистрация" />
                </Link>
              </>
            )}
          </div>
          <ul className="flex flex-col space-y-4 p-2">
            <NavItem text="Фильмы" link="/movies" />
            <NavItem text="Сериалы" link="/series" />
            <NavItem text="Мультфильмы" link="/cartoons" />
            <NavItem text="Избранное" link="/favourites" />
          </ul>
          <div className="flex items-center">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-[50px] max-w-[300px] w-full bg-[#E4E4E4] dark:bg-[#1B1E25] dark:text-white rounded font-semibold text-lg text-[#535353] px-4 focus:outline-none"
              type="text"
              placeholder="Search"
            />
            <button
              onClick={handleSearch}
              className="h-[50px] w-[50px] bg-[#F4ED48] rounded flex justify-center items-center cursor-pointer"
            >
              <img className="h-[25px] w-[25px]" src={searchSvg} alt="search" />
            </button>
          </div>
          <SwitcherTheme />
        </nav>
      </div>
    </>
  );
};
