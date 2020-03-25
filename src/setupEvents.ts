/* eslint-disable no-console */
import store from './redux/store'
import { changeOnline, changeDownload } from './redux/app/actions'
import { ONLINE_STATUS, DOWNLOAD_STATUS } from './redux/app/types'

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

export const init = (): void => {
  window.addEventListener('load', () => {
    onlineStatus()
  })
}
