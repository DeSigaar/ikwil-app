import {
  applyMiddleware,
  compose,
  createStore,
  Store,
  combineReducers,
} from 'redux'
import thunk from 'redux-thunk'
import { routerMiddleware, connectRouter } from 'connected-react-router'
import { getFirebase, firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import history from 'src/utils/history'

// Import all reducers
import appReducer from 'src/redux/app/reducers'

const rootReducer = combineReducers({
  // Combine all reducers
  app: appReducer,

  // Below are other reducers
  router: connectRouter(history),
  firebase: firebaseReducer,
  firestore: firestoreReducer,
})

export type RootState = ReturnType<typeof rootReducer>

const configureStore = (initialState: object): Store => {
  const composeEnhancer: typeof compose =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancer(
      applyMiddleware(
        ...[routerMiddleware(history), thunk.withExtraArgument(getFirebase)],
      ),
    ),
  )

  return store
}

const initialState = window && (window as any).__INITIAL_STATE__

const store = configureStore(initialState)

export default store
