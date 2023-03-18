import { createContext, useEffect, useReducer, useState } from "react"
import { TodoContextType, TODO_FILTERS, FilterValue } from "../types/Todo"
// import { todos as initialTodosMock } from "../mocks/todos.json"
import { reducerTodo } from "../reducers/todo"
import { getLocalStorageTodos, saveLocalStorageTodos } from "../utilities/todoStorage"

interface Props {
  children: React.ReactNode
}

const initialTodos = getLocalStorageTodos()
export const TodoContext = createContext<TodoContextType | null>(null)

export const TodoProvider: React.FC<Props> = ({ children }) => {
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)
  const [activeCount, setActiveCount] = useState(0)

  const [stateTodo, dispatchTodo] = useReducer(reducerTodo, initialTodos)

  useEffect(() => {
    saveLocalStorageTodos({ todos: stateTodo })
    setActiveCount(getActiveCount)
  }, [stateTodo])

  const getActiveCount = stateTodo.filter((todo) => !todo.completed).length

  const handleFilterChange = (filter: FilterValue) => {
    setFilterSelected(filter)
  }

  const filteredTodos = stateTodo.filter((todo) => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  return <TodoContext.Provider value={{ filteredTodos, activeCount, filterSelected, stateTodo, handleFilterChange, dispatchTodo }}>{children}</TodoContext.Provider>
}
