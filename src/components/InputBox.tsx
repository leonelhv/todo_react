import { useContext, useState } from "react"
import { TodoContext } from "../context/todo"
import { TodoContextType } from "../types/Todo"

export const InputBox = () => {
  const [todo, setTodo] = useState<string>("")
  const { addTodo } = useContext(TodoContext) as TodoContextType

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!todo) return
    const newTodo = { id: crypto.randomUUID(), name: todo, description: "", completed: false }
    addTodo(newTodo)
    setTodo("")
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value)
  }
  return (
    <form action="" onSubmit={handleSubmit}>
      <input className="new-todo" placeholder="What needs to be done?" value={todo} onChange={handleInputChange} />
    </form>
  )
}
