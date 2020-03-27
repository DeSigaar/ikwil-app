import { applyMiddleware, compose, createStore, Store } from 'redux'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'connected-react-router'
import { getFirebase } from 'react-redux-firebase'
import { persistStore, persistReducer, Persistor } from 'redux-persist'
import { reduxPersist as configReduxPersist } from 'src/config'
import history from 'src/utils/history'
import { rootReducer } from 'src/redux/store'

export const configureStore = (
  initialState: object,
): { store: Store; persistor: Persistor } => {
  const composeEnhancer: typeof compose =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const store = createStore(
    persistReducer(configReduxPersist, rootReducer),
    initialState,
    composeEnhancer(
      applyMiddleware(
        ...[routerMiddleware(history), thunk.withExtraArgument(getFirebase)],
      ),
    ),
  )
  const persistor = persistStore(store)

  return { store, persistor }
}
