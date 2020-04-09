import * as localForage from 'localforage'
import { combineReducers } from 'redux'
import { connectRouter, RouterState } from 'connected-react-router'
import {
  firebaseReducer,
  FirebaseReducer,
  UserProfile,
} from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import { persistReducer } from 'redux-persist'
import hardSet from 'redux-persist/es/stateReconciler/hardSet'
import history from 'src/utils/history'
import { localForage as configLocalForage } from 'src/config'
import { LocationState } from 'history'

// Import all reducers
import { appReducer, AppState } from 'src/redux/app'
import { filterReducer, FilterState } from 'src/redux/filter'

localForage.config(configLocalForage)

export const persistedAppReducer = persistReducer(
  {
    key: 'ikwil-app_app',
    storage: localForage,
    blacklist: ['installPrompt', 'search'],
  },
  appReducer,
)

export const persistedFirebaseReducer = persistReducer(
  {
    key: 'ikwil-app_firebase',
    storage: localForage,
    stateReconciler: hardSet,
  },
  firebaseReducer,
)

export const rootReducer = combineReducers({
  // Combine all reducers
  app: persistedAppReducer,
  filter: filterReducer,

  // Below are other library reducers
  router: connectRouter(history),
  firebase: persistedFirebaseReducer,
  firestore: firestoreReducer,
})

export type RootState = {
  app: AppState
  filter: FilterState
  router: RouterState<LocationState>
  firebase: FirebaseReducer.Reducer<UserProfile, any>
  firestore: any // eslint-disable-line @typescript-eslint/no-explicit-any
}
