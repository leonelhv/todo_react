import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "todomvc-app-css/index.css"
import { TodoProvider } from "./context/todo"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>
)
