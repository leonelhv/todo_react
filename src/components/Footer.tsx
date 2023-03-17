import { useContext } from "react"
import { TodoContext } from "../context/todo"
import { TodoContextType } from "../types/Todo"
import { Filters } from "./Filters"

export const Footer = () => {
  const { activeCount, handleRemoveAllCompleted } = useContext(TodoContext) as TodoContextType

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong> tareas pendientes
      </span>
      <Filters />
      <button className="clear-completed" onClick={handleRemoveAllCompleted}>
        Clear completed
      </button>
    </footer>
  )
}
