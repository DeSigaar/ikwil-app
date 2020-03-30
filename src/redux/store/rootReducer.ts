import * as localForage from 'localforage'
import { combineReducers } from 'redux'
import { connectRouter, RouterState } from 'connected-react-router'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import { persistReducer } from 'redux-persist'
import hardSet from 'redux-persist/es/stateReconciler/hardSet'
import history from 'src/utils/history'
import { localForage as configLocalForage } from 'src/config'

// Import all reducers
import { appReducer, AppState } from 'src/redux/app'

localForage.config(configLocalForage)

export const rootReducer = combineReducers({
  // Combine all reducers
  app: persistReducer(
    {
      key: 'ikwil-app_app',
      storage: localForage,
      blacklist: ['installPrompt'],
    },
    appReducer,
  ),

  // Below are other library reducers
  router: connectRouter(history),
  firebase: persistReducer(
    {
      key: 'ikwil-app_firebase',
      storage: localForage,
      stateReconciler: hardSet,
    },
    firebaseReducer,
  ),
  firestore: firestoreReducer,
})

export type RootState = {
  app: AppState
  router: RouterState<any> // eslint-disable-line @typescript-eslint/no-explicit-any
  firebase: any // eslint-disable-line @typescript-eslint/no-explicit-any
  firestore: any // eslint-disable-line @typescript-eslint/no-explicit-any
}
