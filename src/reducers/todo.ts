import { Todo, ACTIONS_TODO, TodoID_COMPLETED, TodoID_NAME, todoAction, todoState } from "../types/Todo"

export function reducerTodo(state: todoState, action: todoAction): Todo[] {
  switch (action.type) {
    case ACTIONS_TODO.ADD_TODO:
      const todo = action.payload as Todo
      return [...state, todo]

    case ACTIONS_TODO.TOGGLE_COMPLETED:
      return state.map((todo) => {
        const { id, completed } = action.payload as TodoID_COMPLETED
        if (todo.id == id) {
          return { ...todo, completed }
        }
        return todo
      })

    case ACTIONS_TODO.REMOVE_BY_ID:
      return state.filter((todo) => todo.id !== action.payload!.id)

    case ACTIONS_TODO.REMOVE_ALL_COMPLETED:
      return state.filter((todo) => !todo.completed)

    case ACTIONS_TODO.UPDATE_NAME:
      return state.map((todo) => {
        const { name } = action.payload as TodoID_NAME
        if (todo.id === action.payload!.id) {
          return {
            ...todo,
            name,
          }
        }
        return todo
      })

    default:
      return state
  }
}
