import { useContext } from "react"
import { LOCAL_STORAGE_THEME_MOVIE_STORE } from "../../shared/constants"
import { Theme, ThemeContext } from "./ThemeContext"

interface UseThemeResult {
  theme: Theme
  toggleTheme: () => void
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"

    setTheme?.(newTheme)
    document.body.classList.remove(theme)
    document.body.classList.add(newTheme)

    localStorage.setItem(LOCAL_STORAGE_THEME_MOVIE_STORE, newTheme)
  }

  return {
    theme,
    toggleTheme,
  }
}
