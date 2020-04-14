import {
  FilterState,
  FilterActionsTypes,
  CHANGE_SEARCH,
  CHANGE_FILTER,
} from './types'

export const initialState: FilterState = {
  search: '',
  beweging: false,
  creatief: false,
  kinderen: false,
  sociaal: false,
  spiritueel: false,
  taal: false,
  mijn: false,
  speciaal: false,
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
    case CHANGE_FILTER:
      return {
        ...state,
        [action.filterName]: action.value,
      }
    default:
      return state
  }
}
