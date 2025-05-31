import { Provider as StoreProvider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { store } from "../shared/store"
import { ThemeProvider } from "./ThemeProvider/ThemeProvider"

interface AppProviderProps {
  children: React.ReactNode
}

export const AppProviders = ({ children }: AppProviderProps) => {
  return (
    <StoreProvider store={store}>
      <BrowserRouter>
        <ThemeProvider>{children}</ThemeProvider>
      </BrowserRouter>
    </StoreProvider>
  )
}
