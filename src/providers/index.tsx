import { Provider as StoreProvider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { store } from "../shared/store"
import { ErrorBoundary } from "./ErrorBoundary/ErrorBoundary"
import { ThemeProvider } from "./ThemeProvider/ThemeProvider"

interface AppProviderProps {
  children: React.ReactNode
}

export const AppProviders = ({ children }: AppProviderProps) => {
  return (
    <BrowserRouter>
      <StoreProvider store={store}>
        <ErrorBoundary>
          <ThemeProvider>{children}</ThemeProvider>
        </ErrorBoundary>
      </StoreProvider>
    </BrowserRouter>
  )
}
