import { useContext } from "react"
import { TodoContext } from "../context/todo"
import { FilterValue, TodoContextType } from "../types/Todo"

interface Props {
  keyFilter: FilterValue
  href: string
  literal: string
}

export const Filter: React.FC<Props> = ({ keyFilter, href, literal }) => {
  const { filterSelected, handleFilterChange } = useContext(TodoContext) as TodoContextType
  const isSelected = keyFilter === filterSelected
  const className = isSelected ? "selected" : ""
  return (
    <li>
      <a
        className={className}
        href={href}
        onClick={(evt) => {
          evt.preventDefault()
          handleFilterChange(keyFilter as FilterValue)
        }}
      >
        {literal}
      </a>
    </li>
  )
}
