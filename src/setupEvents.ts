/* eslint-disable no-console */
import store from 'src/redux/store'
import { changeOnline, changeDownload } from 'src/redux/app/actions'
import { ONLINE_STATUS, DOWNLOAD_STATUS } from 'src/redux/app/types'

export const changeOnlineStatus = (onlineStatus: ONLINE_STATUS): void => {
  store.dispatch(changeOnline(onlineStatus))
}

export const changeDownloadStatus = (downloadStatus: DOWNLOAD_STATUS): void => {
  store.dispatch(changeDownload(downloadStatus))
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
  let deferredPrompt: BeforeInstallPromptEvent

  window.addEventListener(
    'beforeinstallprompt',
    (e: BeforeInstallPromptEvent) => {
      console.dir(e)

      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault()
      // Stash the event so it can be triggered later.
      deferredPrompt = e
      // Update UI notify the user they can install the PWA
      // showInstallPromotion()
      alert('cancelled')
      setTimeout(() => {
        deferredPrompt.prompt()
        alert('prompted')

        deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the install prompt')
            alert('accepted')
          } else {
            console.log('User dismissed the install prompt')
            alert('dismissed')
          }
        })
      }, 5000)
    },
  )
}

export const init = (): void => {
  window.addEventListener('load', () => {
    onlineStatus()
    addBeforeInstallPrompt()
  })
}
