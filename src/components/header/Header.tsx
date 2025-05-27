import { FC, memo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import mobileMenuIconWhite from "../../images/icon-menu-white.svg";
import mobileMenuIcon from "../../images/icon-menu.svg";
import searchSvg from "../../images/search.svg";
import {
  useAppDispatch,
  useAppSelector,
} from "../../services/useTypedSelector";
import { logout } from "../../store/movies/auth.slice";
import { changeNewPage } from "../../store/movies/movies.slice";
import MobileMenu from "../mobileMenu/MobileMenu";
import NavItem from "../navItem/NavItem";
import Wrapper from "../wrapper/Wrapper";

const Header = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const navigate = useNavigate();
  const search = useRef<HTMLInputElement>(null);

  const isAuth = Boolean(useAppSelector((state) => state.auth.data));
  const theme = useAppSelector((state) => state.movies.theme);
  const dispatch = useAppDispatch();

  const handleSearch = () => {
    if (search.current?.value.trim()) {
      navigate(`/search?query=${search.current?.value}`);
      dispatch(changeNewPage(1));
    } else {
      navigate("/movies");
    }
  };

  const onClickLogout = () => {
    if (window.confirm("Вы действительно хотите выйти?")) {
      dispatch(logout());
      window.localStorage.removeItem("token");
    }
  };

  return (
    <Wrapper>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center justify-between w-full ll:w-auto">
          <Link
            to="/"
            className="text-[#535353] hover:text-default font-bold text-3xl dark:text-[#FBFDFC]"
          >
            Movie-store
          </Link>
          <nav className="ml-8 hidden ll:block">
            <ul className="flex space-x-7 items-center">
              <NavItem text="Фильмы" link="/movies" />
              <NavItem text="Сериалы" link="/series" />
              <NavItem text="Мультфильмы" link="/cartoons" />
              <NavItem text="Избранное" link="/favourites" />
            </ul>
          </nav>
          <div
            onClick={() => setIsMobileMenu(!isMobileMenu)}
            className="block ll:hidden cursor-pointer"
          >
            <img
              src={theme ? mobileMenuIcon : mobileMenuIconWhite}
              alt="menu"
            />
          </div>
          <MobileMenu isOpen={isMobileMenu} setIsMobileMenu={setIsMobileMenu} />
        </div>
        <div className="flex items-center justify-between">
          <div className="hidden ll:flex gap-[10px] m-[10px]">
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
          <div className="hidden ll:flex ll:items-center ll:w-auto">
            <div className="flex items-center w-full">
              <input
                ref={search}
                className="h-[50px] w-full max-w-[300px] bg-[#E4E4E4] dark:bg-[#1B1E25] dark:text-white rounded font-semibold text-lg text-[#535353] px-4 focus:outline-none"
                type="text"
                placeholder="Search"
              />
              <button
                onClick={handleSearch}
                className="h-[50px] w-[50px] bg-[#F4ED48] rounded flex justify-center items-center cursor-pointer"
              >
                <img
                  className="h-[25px] w-[25px]"
                  src={searchSvg}
                  alt="search"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

interface IButtonProps {
  text: string;
  isAuth?: boolean;
  onClickLogout?: () => void;
}

export const Button: FC<IButtonProps> = memo(
  ({ text, isAuth, onClickLogout }) => {
    return (
      <button
        onClick={onClickLogout}
        className={`h-[50px] p-[20px] text-default border rounded-lg border-default flex items-center text text-lg font-bold hover:text-white hover:bg-default ${
          isAuth && "bg-red-600 text-white border-none hover:bg-red-600"
        }`}
      >
        {text}
      </button>
    );
  }
);

export default Header;
