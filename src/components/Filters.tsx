import { FilterValue, FILTER_BUTTONS } from "../types/Todo"
import { Filter } from "./Filter"

export const Filters = () => {
  return (
    <ul className="filters">
      {Object.entries(FILTER_BUTTONS).map(([key, { literal, href }]) => {
        return <Filter key={crypto.randomUUID()} href={href} keyFilter={key as FilterValue} literal={literal} />
      })}
    </ul>
  )
}
