import { applyMiddleware, compose, createStore, Store } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import history from '../../utils/history'

const configureStore = (initialState: object): Store => {
  const composeEnhancer: typeof compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancer(applyMiddleware(...[routerMiddleware(history), thunk])),
  )

  return store
}

const initialState = {}

const store = configureStore(initialState)

export default store
