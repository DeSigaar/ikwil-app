import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Switch, Route, Redirect } from 'react-router'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'
import { App, Login, Register, NotFound } from './pages'
import * as serviceWorker from './serviceWorker'
import history from './utils/history'
import store from './redux/store'
import { fireApp } from './utils/firebase'

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
}

const rffProps = {
  firebase: fireApp,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
}

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ReactReduxFirebaseProvider {...rffProps}>
        <Switch>
          <Route exact path="/" component={App} />

          <Route exact path="/login" component={Login} />
          <Redirect from="/inlog" to="/login" />
          <Redirect from="/inloggen" to="/login" />

          <Route exact path="/register" component={Register} />
          <Redirect from="/registreren" to="/register" />

          <Route component={NotFound} />
        </Switch>
      </ReactReduxFirebaseProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
)

serviceWorker.register()
