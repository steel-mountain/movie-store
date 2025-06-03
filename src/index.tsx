import ReactDOM from "react-dom/client"
import "./index.css"
import { App } from "./pages"
import { AppProviders } from "./providers"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <AppProviders>
    <App />
  </AppProviders>,
)
