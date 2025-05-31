import { Dispatch, FC, SetStateAction, useState } from "react"
import { useNavigate } from "react-router-dom"
import { CloseMenu, CloseMenuWhite, Search } from "../../shared/assets"
import { useAppDispatch, useAppSelector } from "../../shared/hooks/useRedux"
import { logout } from "../../shared/store/slices/auth/auth.slice"
import { changeNewPage } from "../../shared/store/slices/movies/movies.slice"
import { AppLink, Button, Icon, Input } from "../../shared/ui"
import { getAuthButtonClass } from "../../shared/utils/buttonClasses"
import { NavItem, SwitcherTheme } from "../index"

interface MobileMenuProps {
  isOpen: boolean
  setIsMobileMenu: Dispatch<SetStateAction<boolean>>
}

export const MobileMenu: FC<MobileMenuProps> = ({ isOpen, setIsMobileMenu }) => {
  const [search, setSearch] = useState("")
  const isAuth = Boolean(useAppSelector((state) => state.auth.data))
  const navigate = useNavigate()

  const dispatch = useAppDispatch()
  const theme = useAppSelector((state) => state.movies.theme)

  const handleSearch = () => {
    if (search.trim()) {
      navigate(`/search?query=${search}`)
      dispatch(changeNewPage(1))
    } else {
      navigate("/movies")
    }
  }

  const onClickLogout = () => {
    if (window.confirm("Вы действительно хотите выйти?")) {
      dispatch(logout())
    }
  }

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
          <Icon
            Svg={theme ? CloseMenu : CloseMenuWhite}
            onClick={() => setIsMobileMenu(!isOpen)}
            cursor="pointer"
            className="w-[25px] h-[25px]"
          />
        </div>
        <nav className=" my-8 mx-5 space-y-5 text-lg w-full">
          <div className="flex flex-wrap ml-[10px] gap-[10px]">
            {isAuth ? (
              <>
                <AppLink to="auth/login">
                  <Button className={getAuthButtonClass(isAuth)} onClick={onClickLogout}>
                    Выход
                  </Button>
                </AppLink>
              </>
            ) : (
              <>
                <AppLink to="auth/login">
                  <Button className={getAuthButtonClass(isAuth)} onClick={onClickLogout}>
                    Вход
                  </Button>
                </AppLink>
                <AppLink to="auth/register">
                  <Button className={getAuthButtonClass(isAuth)} onClick={onClickLogout}>
                    Регистрация
                  </Button>
                </AppLink>
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
            <Input
              value={search}
              onChange={(value: string) => setSearch(value)}
              className="h-[50px] max-w-[300px] w-full bg-[#E4E4E4] dark:bg-[#1B1E25] dark:text-white rounded font-semibold text-lg text-[#535353] px-4 focus:outline-none"
              type="text"
              placeholder="Search"
            />
            <Button
              onClick={handleSearch}
              className="h-[50px] w-[50px] bg-[#F4ED48] rounded flex justify-center items-center cursor-pointer"
            >
              <Icon Svg={Search} className="h-[25px] w-[25px]" />
            </Button>
          </div>
          <SwitcherTheme />
        </nav>
      </div>
    </>
  )
}
