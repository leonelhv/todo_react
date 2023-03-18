import { Todo } from "../types/Todo"
import { LOCAL_STORAGE_TODOS } from "../types/LocalStorage"

export const saveLocalStorageTodos = ({ todos }: { todos: Todo[] }) => {
  localStorage.setItem(LOCAL_STORAGE_TODOS, JSON.stringify(todos))
}
export const getLocalStorageTodos = (): Todo[] => {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_TODOS) ?? "[]")
}
