import {
  AppState,
  AppActionsTypes,
  ONLINE_CHANGED,
  CACHE_CHANGED,
  INSTALL_CHANGED,
  SET_INSTALL_PROMPT,
  CHANGE_SEARCH,
} from './types'

export const initialState: AppState = {
  onlineStatus: 'UNKNOWN',
  cacheStatus: 'UNKNOWN',
  installStatus: 'UNKNOWN',
  installPrompt: undefined,
  search: '',
}

export const appReducer = (
  state = initialState,
  action: AppActionsTypes,
): AppState => {
  switch (action.type) {
    case ONLINE_CHANGED:
      return {
        ...state,
        onlineStatus: action.onlineStatus,
      }
    case CACHE_CHANGED:
      return {
        ...state,
        cacheStatus: action.cacheStatus,
      }
    case INSTALL_CHANGED:
      return {
        ...state,
        installStatus: action.installStatus,
      }
    case SET_INSTALL_PROMPT:
      return {
        ...state,
        installStatus: 'PROMPT_SET',
        installPrompt: action.installPrompt,
      }
    case CHANGE_SEARCH:
      return {
        ...state,
        search: action.search,
      }
    default:
      return state
  }
}
