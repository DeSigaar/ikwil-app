export const CHANGE_SEARCH = '@FILTER/CHANGE_SEARCH'
export const CHANGE_FILTER = '@FILTER/CHANGE_FILTER'

export interface FilterState {
  search: string
  beweging: boolean
  creatief: boolean
  kinderen: boolean
  sociaal: boolean
  spiritueel: boolean
  taal: boolean
  mijn: boolean
  speciaal: boolean
}

export interface ChangeSearchAction {
  type: typeof CHANGE_SEARCH
  search: string
}

export interface ChangeFilterAction {
  type: typeof CHANGE_FILTER
  filterName: string
  value: boolean
}

export type FilterActionsTypes = ChangeSearchAction | ChangeFilterAction
