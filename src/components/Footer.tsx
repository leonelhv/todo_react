import { useContext } from "react"
import { TodoContext } from "../context/todo"
import { ACTIONS_TODO, TodoContextType } from "../types/Todo"
import { Filters } from "./Filters"

export const Footer = () => {
  const { activeCount, dispatchTodo } = useContext(TodoContext) as TodoContextType

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong> tareas pendientes
      </span>
      <Filters />
      <button className="clear-completed" onClick={() => dispatchTodo({ type: ACTIONS_TODO.REMOVE_ALL_COMPLETED })}>
        Clear completed
      </button>
    </footer>
  )
}
