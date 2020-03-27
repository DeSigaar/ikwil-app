import * as localForage from 'localforage'
import hardSet from 'redux-persist/es/stateReconciler/hardSet'

localForage.config({
  name: 'Ik Wil App',
  storeName: 'ikwil_app',
  description: 'Data for Ik Wil App',
  version: 1.0,
})

export default {
  key: 'ikwil-app-firebase',
  storage: localForage,
  stateReconciler: hardSet,
  // whitelist: [
  //   'firebase',
  //   // 'firestore'
  // ],
  // blacklist: ['app', 'router'],
}
