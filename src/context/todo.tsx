import { createContext, useEffect, useState } from "react"
import { Todo, TodoContextType, TODO_FILTERS, FilterValue, TodoID_COMPLETED, TodoId, TodoID_NAME } from "../types/Todo"
import { todos as initialTodos } from "../mocks/todos.json"

interface Props {
  children: React.ReactNode
}

export const TodoContext = createContext<TodoContextType | null>(null)

export const TodoProvider: React.FC<Props> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)
  const [activeCount, setActiveCount] = useState(0)

  useEffect(() => {
    setActiveCount(getActiveCount)
  }, [todos])

  const getActiveCount = todos.filter((todo) => !todo.completed).length

  const addTodo = (todo: Todo) => {
    setTodos((prev) => [...prev, todo])
  }

  const handleCompleted = ({ id, completed }: TodoID_COMPLETED) => {
    const newTodos = todos.map((todo) => {
      if (todo.id == id) {
        return { ...todo, completed }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const handleRemoveTodo = ({ id }: TodoId) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  const handleFilterChange = (filter: FilterValue) => {
    setFilterSelected(filter)
  }

  const handleRemoveAllCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.completed)
    setTodos(newTodos)
  }

  const handleUpdateNameTodo = ({ name, id }: TodoID_NAME) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          name,
        }
      }
      return todo
    })

    setTodos(newTodos)
  }

  const filteredTodos = todos.filter((todo) => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  return (
    <TodoContext.Provider
      value={{ filteredTodos, activeCount, filterSelected, addTodo, handleFilterChange, handleRemoveAllCompleted, handleRemoveTodo, handleCompleted, handleUpdateNameTodo }}
    >
      {children}
    </TodoContext.Provider>
  )
}
