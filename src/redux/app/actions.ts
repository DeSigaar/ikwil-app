import {
  CHANGE_ONLINE,
  CHANGE_DOWNLOAD,
  ONLINE_STATUS,
  DOWNLOAD_STATUS,
  AppActionsTypes,
} from './types'

export const changeOnline = (onlineStatus: ONLINE_STATUS): AppActionsTypes => {
  return {
    type: CHANGE_ONLINE,
    onlineStatus,
  }
}

export const changeDownload = (
  downloadStatus: DOWNLOAD_STATUS,
): AppActionsTypes => {
  return {
    type: CHANGE_DOWNLOAD,
    downloadStatus,
  }
}
