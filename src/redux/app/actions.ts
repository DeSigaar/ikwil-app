import { toast } from 'react-toastify'
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
import { store } from 'src/redux/store'

export const changeOnline = (
  onlineStatus: ONLINE_STATUS,
  showToast?: boolean,
): AppActionsTypes => {
  if (showToast)
    switch (onlineStatus) {
      case 'ONLINE':
        toast.dismiss('OFFLINE')
        toast('Je bent nu online!', {
          type: toast.TYPE.SUCCESS,
          toastId: 'ONLINE',
        })
        break
      case 'OFFLINE':
        toast.dismiss('ONLINE')
        toast('Je bent nu offline!', {
          type: toast.TYPE.ERROR,
          toastId: 'OFFLINE',
        })
        break
      case 'UNKNOWN':
      default:
        toast.dismiss('OFFLINE')
        toast.dismiss('ONLINE')
        break
    }

  return {
    type: ONLINE_CHANGED,
    onlineStatus,
  }
}

export const changeCache = (cacheStatus: CACHE_STATUS): AppActionsTypes => {
  switch (cacheStatus) {
    case 'CACHED':
      toast('App kan nu offline gebruikt worden.', {
        type: toast.TYPE.INFO,
        toastId: 'CACHED',
        delay: 1000,
      })
      break
    case 'CACHING':
    case 'SHOULD_CACHE':
    case 'UNKNOWN':
    default:
      toast.dismiss('CACHED')
      break
  }

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

export const askForInstall = (): AppActionsTypes => {
  const installPrompt: BeforeInstallPromptEvent = store.getState().app
    .installPrompt

  if (!installPrompt)
    return {
      type: INSTALL_CHANGED,
      installStatus: 'PROMPT_NOT_SET',
    }

  installPrompt.prompt()
  installPrompt.userChoice.then((choiceResult) => {
    if (choiceResult.outcome === 'accepted') {
      return {
        type: INSTALL_CHANGED,
        installStatus: 'INSTALLED',
      }
    } else {
      return {
        type: INSTALL_CHANGED,
        installStatus: 'NOT_INSTALLED',
      }
    }
  })

  return {
    type: INSTALL_CHANGED,
    installStatus: 'PROMPTED',
  }
}
