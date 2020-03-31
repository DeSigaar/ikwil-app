import { configureStore } from 'src/redux/store'

export const initialState = window && window.__INITIAL_STATE__

export const configuredStore = configureStore(initialState)
export const store = configuredStore.store
export const persistor = configuredStore.persistor
