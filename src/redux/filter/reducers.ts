import { FilterState, FilterActionsTypes, CHANGE_SEARCH } from './types'

export const initialState: FilterState = {
  search: '',
}

export const filterReducer = (
  state = initialState,
  action: FilterActionsTypes,
): FilterState => {
  switch (action.type) {
    case CHANGE_SEARCH:
      return {
        ...state,
        search: action.search,
      }
    default:
      return state
  }
}
