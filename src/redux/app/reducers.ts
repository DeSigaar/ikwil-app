import {
  AppState,
  AppActionsTypes,
  CHANGE_ONLINE,
  CHANGE_DOWNLOAD,
} from './types'

const initialState: AppState = {
  onlineStatus: 'UNKNOWN',
  downloadStatus: 'UNKNOWN',
}

const appReducer = (
  state = initialState,
  action: AppActionsTypes,
): AppState => {
  switch (action.type) {
    case CHANGE_ONLINE:
      return {
        ...state,
        onlineStatus: action.onlineStatus,
      }
    case CHANGE_DOWNLOAD:
      return {
        ...state,
        downloadStatus: action.downloadStatus,
      }
    default:
      return state
  }
}

export default appReducer
