/* eslint-disable no-console */
import store from 'src/redux/store'
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

export const changeOnlineStatus = (onlineStatus: ONLINE_STATUS): void => {
  store.dispatch(changeOnline(onlineStatus))
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
  const updateOnlineStatus = (): void => {
    changeOnlineStatus(navigator.onLine ? 'ONLINE' : 'OFFLINE')
  }

  updateOnlineStatus()
  window.addEventListener('online', updateOnlineStatus)
  window.addEventListener('offline', updateOnlineStatus)
}

export const addBeforeInstallPrompt = (): void => {
  window.addEventListener(
    'beforeinstallprompt',
    (e: BeforeInstallPromptEvent) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault()
      // Stash the event so it can be triggered later.
      setInstallPromptEvent(e)
      // Update UI notify the user they can install the PWA
      e.prompt()
      changeInstallStatus('PROMPTED')
      e.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          changeInstallStatus('INSTALLED')
          console.log('User accepted the install prompt')
        } else {
          changeInstallStatus('NOT_INSTALLED')
          console.log('User dismissed the install prompt')
        }
      })
    },
  )
}

export const init = (): void => {
  window.addEventListener('load', () => {
    onlineStatus()
    addBeforeInstallPrompt()
  })
}
