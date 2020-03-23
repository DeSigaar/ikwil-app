import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Switch, Route, Redirect } from 'react-router'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'
import {
  App,
  Login,
  LoginFirst,
  PrivacyPolicy,
  TermsOfService,
  NotFound,
} from './pages'
import * as serviceWorker from './serviceWorker'
import history from './utils/history'
import store from './redux/store'
import { fireApp } from './utils/firebase'
import configReactReduxFirebase from './config/reactReduxFirebase'

const rffProps = {
  firebase: fireApp,
  config: configReactReduxFirebase,
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
          <Route exact path="/loginfirst" component={LoginFirst} />
          <Redirect from="/inlog" to="/login" />
          <Redirect from="/inloggen" to="/login" />
          <Redirect from="/register" to="/login" />
          <Redirect from="/registreren" to="/login" />

          <Route exact path="/privacy-policy" component={PrivacyPolicy} />
          <Redirect from="/privacy" to="/privacy-policy" />
          <Redirect from="/privacypolicy" to="/privacy-policy" />
          <Route exact path="/terms-of-service" component={TermsOfService} />
          <Redirect from="/tos" to="/terms-of-service" />
          <Redirect from="/terms" to="/terms-of-service" />
          <Redirect from="/termsofservice" to="/terms-of-service" />

          <Route component={NotFound} />
        </Switch>
      </ReactReduxFirebaseProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
)

serviceWorker.register()
