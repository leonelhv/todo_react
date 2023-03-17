import { useContext, useEffect, useRef } from "react"
import { TodoContext } from "../context/todo"
import { TodoContextType } from "../types/Todo"
import { Todo } from "./Todo"
import autoAnimate from "@formkit/auto-animate"

export const Todos = () => {
  const { filteredTodos: todos } = useContext(TodoContext) as TodoContextType
  const parent = useRef(null)

  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])
  return (
    <ul className="todo-list" ref={parent}>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}
