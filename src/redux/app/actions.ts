import {
  ONLINE_STATUS,
  CACHE_STATUS,
  INSTALL_STATUS,
  ONLINE_CHANGED,
  CACHE_CHANGED,
  INSTALL_CHANGED,
  SET_INSTALL_PROMPT,
  AppActionsTypes,
} from './types'

export const changeOnline = (onlineStatus: ONLINE_STATUS): AppActionsTypes => {
  return {
    type: ONLINE_CHANGED,
    onlineStatus,
  }
}

export const changeCache = (cacheStatus: CACHE_STATUS): AppActionsTypes => {
  return {
    type: CACHE_CHANGED,
    cacheStatus,
  }
}

export const changeInstall = (
  installStatus: INSTALL_STATUS,
): AppActionsTypes => {
  return {
    type: INSTALL_CHANGED,
    installStatus,
  }
}

export const setInstallPrompt = (
  installPrompt: BeforeInstallPromptEvent,
): AppActionsTypes => {
  return {
    type: SET_INSTALL_PROMPT,
    installPrompt,
  }
}
