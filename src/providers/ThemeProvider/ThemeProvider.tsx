import { FC, ReactNode, useEffect, useMemo, useState } from "react"
import { Theme, ThemeContext } from "./ThemeContext"

const defaultTheme = (localStorage.getItem("theme") as Theme) || "light"

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  useEffect(() => {
    document.body.classList.add(theme)
  }, [theme])

  const defaultProps = useMemo(() => {
    return {
      theme,
      setTheme,
    }
  }, [theme])

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>
}
