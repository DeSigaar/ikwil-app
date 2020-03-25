import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import history from '../../utils/history'

// Import all reducers
import appReducer from '../app/reducers'

export const rootReducer = combineReducers({
  // Combine all reducers
  app: appReducer,

  // Below are other reducers
  router: connectRouter(history),
  firebase: firebaseReducer,
  firestore: firestoreReducer,
})

// Used for
export type RootState = ReturnType<typeof rootReducer>
