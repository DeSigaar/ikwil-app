export const CHANGE_ONLINE = `@APP/CHANGE_ONLINE`
export const CHANGE_DOWNLOAD = `@APP/CHANGE_DOWNLOAD`

export type ONLINE_STATUS = 'UNKNOWN' | 'ONLINE' | 'OFFLINE'
export type DOWNLOAD_STATUS =
  | 'UNKNOWN'
  | 'DOWNLOADED'
  | 'DOWNLOADING'
  | 'SHOULD_DOWNLOAD'
  | 'CACHED'

export interface AppState {
  onlineStatus: ONLINE_STATUS
  downloadStatus: DOWNLOAD_STATUS
}

interface ChangeOnlineAction {
  type: typeof CHANGE_ONLINE
  onlineStatus: ONLINE_STATUS
}

interface ChangeDownloadAction {
  type: typeof CHANGE_DOWNLOAD
  downloadStatus: DOWNLOAD_STATUS
}

export type AppActionsTypes = ChangeOnlineAction | ChangeDownloadAction
