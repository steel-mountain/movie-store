import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useTheme } from "../../providers/ThemeProvider/useTheme"
import { useAppDispatch, useAppSelector } from "../../shared/hooks/useRedux"
import { logout } from "../../shared/store/slices/auth/auth.slice"
import { changeNewPage } from "../../shared/store/slices/movies/movies.slice"
import { AppLink, Button, Icon, Input } from "../../shared/ui"
import { getAuthButtonClass } from "../../shared/utils/buttonClasses"
import { MobileMenu, NavItem, Wrapper } from "../index"

export const Header = () => {
  const [isMobileMenu, setMobileMenu] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const navigate = useNavigate()
  const searchRef = useRef<HTMLInputElement>(null)

  const isAuth = Boolean(useAppSelector((state) => state.auth.data))
  const dispatch = useAppDispatch()

  const handleSearch = () => {
    if (searchRef.current?.value.trim()) {
      navigate(`/search?query=${searchRef.current?.value}`)
      dispatch(changeNewPage(1))
    } else {
      navigate("/movies")
    }
  }

  const onClickLogout = () => {
    if (window.confirm("Вы действительно хотите выйти?")) {
      dispatch(logout())
      window.localStorage.removeItem("token")
    }
  }

  return (
    <Wrapper>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center justify-between w-full ll:w-auto">
          <AppLink
            to="/"
            className="text-[#535353] hover:text-default font-bold text-3xl dark:text-[#FBFDFC]"
          >
            Movie-store
          </AppLink>
          <nav className="ml-8 hidden ll:block">
            <ul className="flex space-x-7 items-center">
              <NavItem text="Фильмы" link="/movies" />
              <NavItem text="Сериалы" link="/series" />
              <NavItem text="Мультфильмы" link="/cartoons" />
              <NavItem text="Избранное" link="/favourites" />
            </ul>
          </nav>
          <div onClick={() => setMobileMenu(!isMobileMenu)} className="block ll:hidden cursor-pointer">
            <Icon name="BurgerMenu" className={`${theme === "dark" ? "text-white" : ""}`} />
          </div>
          <MobileMenu isOpen={isMobileMenu} setMobileMenu={setMobileMenu} />
        </div>
        <div className="flex items-center justify-between">
          <div className="hidden ll:flex gap-[10px] m-[10px]">
            <Button>
              <Icon name="Theme" className="h-8 w-8" onClick={toggleTheme} />
            </Button>
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
          <div className="hidden ll:flex ll:items-center ll:w-auto">
            <div className="flex items-center w-full">
              <Input
                ref={searchRef}
                className="h-[50px] w-full max-w-[300px] bg-[#E4E4E4] dark:bg-[#1B1E25] dark:text-white rounded font-semibold text-lg text-[#535353] px-4 focus:outline-none"
                type="text"
                placeholder="Search"
              />

              <Button
                className="h-[50px] w-[50px] bg-[#F4ED48] rounded flex justify-center items-center cursor-pointer"
                onClick={handleSearch}
              >
                <Icon name="Search" className="h-[25px] w-[25px]" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
