import { useContext, useState } from "react"
import { TodoContext } from "../context/todo"
import { ACTIONS_TODO, Todo as ITodo, TodoContextType } from "../types/Todo"

interface Props {
  todo: ITodo
}
export const Todo: React.FC<Props> = ({ todo }) => {
  const { dispatchTodo } = useContext(TodoContext) as TodoContextType
  const { id, completed, name } = todo

  const [nameEdit, setNameEdit] = useState(name)
  const [activeEdit, setActiveEdit] = useState(false)

  const handleChangeCheckbox = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatchTodo({ type: ACTIONS_TODO.TOGGLE_COMPLETED, payload: { id, completed: evt.target.checked } })
  }

  const onChangeNameEdit = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setNameEdit(evt.target.value)
  }

  const onSubmitUpdateName = (evt: React.SyntheticEvent<HTMLFormElement>) => {
    evt.preventDefault()
    dispatchTodo({ type: ACTIONS_TODO.UPDATE_NAME, payload: { id, name: nameEdit } })
    setActiveEdit(false)
  }

  const classCompleted = completed ? "completed" : ""
  const classEditing = activeEdit ? "editing" : ""
  return (
    <li className={`${classCompleted} ${classEditing}`}>
      <div className="view">
        <input className="toggle" type="checkbox" onChange={handleChangeCheckbox} checked={completed} />
        <label onDoubleClick={() => setActiveEdit(true)}>{name}</label>
        <button className="destroy" onClick={() => dispatchTodo({ type: ACTIONS_TODO.REMOVE_BY_ID, payload: { id } })}></button>
      </div>
      <form onSubmit={onSubmitUpdateName}>
        <input className="edit" value={nameEdit} onChange={onChangeNameEdit} />
      </form>
    </li>
  )
}
