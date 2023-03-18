import { useContext, useState } from "react"
import { TodoContext } from "../context/todo"
import { ACTIONS_TODO, TodoContextType } from "../types/Todo"

export const InputBox = () => {
  const [todo, setTodo] = useState<string>("")
  const { dispatchTodo } = useContext(TodoContext) as TodoContextType

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!todo) return
    const newTodo = { id: crypto.randomUUID(), name: todo, description: "", completed: false }
    dispatchTodo({ type: ACTIONS_TODO.ADD_TODO, payload: newTodo })
    setTodo("")
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value)
  }
  return (
    <form action="" onSubmit={handleSubmit}>
      <input className="new-todo" placeholder="¿Qué hay que hacer?" value={todo} onChange={handleInputChange} />
    </form>
  )
}
