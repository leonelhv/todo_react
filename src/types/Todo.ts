export interface Todo {
  id: string
  name: string
  completed: boolean
}

export type TodoName = Pick<Todo, "name">
export type TodoId = Pick<Todo, "id">
export type TodoID_COMPLETED = Pick<Todo, "id" | "completed">
export type TodoID_NAME = Pick<Todo, "id" | "name">

export type TodoContextType = {
  activeCount: number
  filteredTodos: Todo[]
  filterSelected: FilterValue
  stateTodo: Todo[]
  dispatchTodo: React.Dispatch<todoAction>
  handleFilterChange: (filter: FilterValue) => void
}
export type todoAction = {
  type: ActionsValue
  payload?: Todo | TodoID_NAME | TodoID_COMPLETED | TodoId
}
export type todoState = Todo[]
export const TODO_FILTERS = {
  ALL: "all",
  ACTIVE: "active",
  COMPLETED: "completed",
} as const

export const FILTER_BUTTONS = {
  [TODO_FILTERS.ALL]: {
    literal: "Todos",
    href: `/?filter=${TODO_FILTERS.ALL}`,
  },
  [TODO_FILTERS.ACTIVE]: {
    literal: "Activos",
    href: `/?filter=${TODO_FILTERS.ACTIVE}`,
  },
  [TODO_FILTERS.COMPLETED]: {
    literal: "Completos",
    href: `/?filter=${TODO_FILTERS.COMPLETED}`,
  },
}

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]

export const ACTIONS_TODO = {
  TOGGLE_COMPLETED: "toggle_completed",
  REMOVE_BY_ID: "remove_by_id",
  REMOVE_ALL_COMPLETED: "remove_all_completed",
  UPDATE_NAME: "update_name",
  ADD_TODO: "add_todo",
} as const

export type ActionsValue = typeof ACTIONS_TODO[keyof typeof ACTIONS_TODO]
