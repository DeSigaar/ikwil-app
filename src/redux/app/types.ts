export const ONLINE_CHANGED = `@APP/ONLINE_CHANGED`
export const CACHE_CHANGED = `@APP/CACHE_CHANGED`
export const INSTALL_CHANGED = `@APP/INSTALL_CHANGED`
export const SET_INSTALL_PROMPT = '@APP/SET_INSTALL_PROMPT'
export const ASK_FOR_INSTALL = '@APP/ASK_FOR_INSTALL'
export const CHANGE_SEARCH = '@APP/CHANGE_SEARCH'

export type ONLINE_STATUS = 'UNKNOWN' | 'OFFLINE' | 'ONLINE'
export type CACHE_STATUS = 'UNKNOWN' | 'SHOULD_CACHE' | 'CACHING' | 'CACHED'
export type INSTALL_STATUS =
  | 'UNKNOWN'
  | 'PROMPT_SET'
  | 'PROMPT_NOT_SET'
  | 'PROMPTED'
  | 'NOT_INSTALLED'
  | 'INSTALLED'

export interface AppState {
  onlineStatus: ONLINE_STATUS
  cacheStatus: CACHE_STATUS
  installStatus: INSTALL_STATUS
  installPrompt?: BeforeInstallPromptEvent | undefined
  search: string
}

export interface ChangeOnlineAction {
  type: typeof ONLINE_CHANGED
  onlineStatus: ONLINE_STATUS
}

export interface ChangeCacheAction {
  type: typeof CACHE_CHANGED
  cacheStatus: CACHE_STATUS
}

export interface ChangeInstallAction {
  type: typeof INSTALL_CHANGED
  installStatus: INSTALL_STATUS
}

export interface SetInstallPromptAction {
  type: typeof SET_INSTALL_PROMPT
  installPrompt: BeforeInstallPromptEvent
}

export interface ChangeSearchAction {
  type: typeof CHANGE_SEARCH
  search: string
}

export type AppActionsTypes =
  | ChangeOnlineAction
  | ChangeCacheAction
  | ChangeInstallAction
  | SetInstallPromptAction
  | ChangeSearchAction
