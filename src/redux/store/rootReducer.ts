import { combineReducers } from 'redux'
import { connectRouter, RouterState } from 'connected-react-router'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import { persistReducer } from 'redux-persist'
import history from 'src/utils/history'
import { reduxPersistFirebase as configReduxPersistFirebase } from 'src/config'

// Import all reducers
import { appReducer, AppState } from 'src/redux/app'

export const rootReducer = combineReducers({
  // Combine all reducers
  app: appReducer,

  // Below are other library reducers
  router: connectRouter(history),
  firebase: persistReducer(configReduxPersistFirebase, firebaseReducer),
  firestore: firestoreReducer,
})

export type RootState = {
  app: AppState
  router: RouterState<any> // eslint-disable-line @typescript-eslint/no-explicit-any
  firebase: any // eslint-disable-line @typescript-eslint/no-explicit-any
  firestore: any // eslint-disable-line @typescript-eslint/no-explicit-any
}
