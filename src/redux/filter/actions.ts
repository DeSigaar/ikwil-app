import { FilterActionsTypes, CHANGE_SEARCH } from './types'

export const changeSearch = (search: string): FilterActionsTypes => {
  return {
    type: CHANGE_SEARCH,
    search,
  }
}
