import { applyMiddleware, compose, createStore, Store } from 'redux'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'connected-react-router'
import { getFirebase } from 'react-redux-firebase'
import { rootReducer } from './rootReducer'
import history from '../../utils/history'

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
