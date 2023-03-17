export interface Todo {
  id: string
  name: string
  description: string
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
  addTodo: (todo: Todo) => void
  handleFilterChange: (filter: FilterValue) => void
  handleRemoveAllCompleted: () => void
  handleRemoveTodo: ({ id }: TodoId) => void
  handleCompleted: ({ id, completed }: TodoID_COMPLETED) => void
  handleUpdateNameTodo: ({ id, name }: TodoID_NAME) => void
}
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
