import {
  AppState,
  AppActionsTypes,
  ONLINE_CHANGED,
  CACHE_CHANGED,
  INSTALL_CHANGED,
} from './types'

const initialState: AppState = {
  onlineStatus: 'UNKNOWN',
  cacheStatus: 'UNKNOWN',
  installStatus: 'UNKNOWN',
}

const appReducer = (
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
    default:
      return state
  }
}

export default appReducer
