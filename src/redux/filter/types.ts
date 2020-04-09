export const CHANGE_SEARCH = '@FILTER/CHANGE_SEARCH'

export interface FilterState {
  search: string
}

export interface ChangeSearchAction {
  type: typeof CHANGE_SEARCH
  search: string
}

export type FilterActionsTypes = ChangeSearchAction
