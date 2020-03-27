import * as localForage from 'localforage'

localForage.config({
  name: 'Ik Wil App',
  storeName: 'ikwil_app',
  description: 'Data for Ik Wil App',
  version: 1.0,
})

export default {
  key: 'ikwil-app-app',
  storage: localForage,
  whitelist: ['app'],
  blacklist: ['router', 'firebase', 'firestore'],
}
