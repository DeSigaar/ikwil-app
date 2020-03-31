import { store } from 'src/redux/store'
import {
  changeOnline,
  changeCache,
  changeInstall,
  setInstallPrompt,
} from 'src/redux/app/actions'
import {
  ONLINE_STATUS,
  CACHE_STATUS,
  INSTALL_STATUS,
} from 'src/redux/app/types'

export const changeOnlineStatus = (
  onlineStatus: ONLINE_STATUS,
  toast?: boolean,
): void => {
  store.dispatch(changeOnline(onlineStatus, toast))
}

export const changeCacheStatus = (cacheStatus: CACHE_STATUS): void => {
  store.dispatch(changeCache(cacheStatus))
}

export const changeInstallStatus = (installStatus: INSTALL_STATUS): void => {
  store.dispatch(changeInstall(installStatus))
}

export const setInstallPromptEvent = (
  installEvent: BeforeInstallPromptEvent,
): void => {
  store.dispatch(setInstallPrompt(installEvent))
}

export const onlineStatus = (): void => {
  const updateOnlineStatus = (toast?: boolean): void => {
    const status = navigator.onLine ? 'ONLINE' : 'OFFLINE'
    changeOnlineStatus(status, toast)
  }

  updateOnlineStatus(false)
  window.addEventListener('online', (): void => updateOnlineStatus(true))
  window.addEventListener('offline', (): void => updateOnlineStatus(true))
}

export const addBeforeInstallPrompt = (): void => {
  window.addEventListener(
    'beforeinstallprompt',
    (e: BeforeInstallPromptEvent) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault()
      // Stash the event so it can be triggered later.
      setInstallPromptEvent(e)
    },
  )
}

export const checkIfInstalled = (): void => {
  if (window.matchMedia('(display-mode: standalone)').matches)
    changeInstallStatus('INSTALLED')
}

export const init = (): void => {
  window.addEventListener('load', () => {
    onlineStatus()
    addBeforeInstallPrompt()
    checkIfInstalled()
  })
}
