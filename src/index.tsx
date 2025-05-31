import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { AppProviders } from "./providers"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <AppProviders>
    <App />
  </AppProviders>,
)
