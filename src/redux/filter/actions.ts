import { FilterActionsTypes, CHANGE_SEARCH, CHANGE_FILTER } from './types'

export const changeSearch = (search: string): FilterActionsTypes => {
  return {
    type: CHANGE_SEARCH,
    search,
  }
}

export const changeFilter = (
  filterName: string,
  value: boolean,
): FilterActionsTypes => {
  return {
    type: CHANGE_FILTER,
    filterName,
    value,
  }
}
