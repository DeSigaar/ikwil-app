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

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ReactReduxFirebaseProvider
        firebase={fireApp}
        config={configReactReduxFirebase}
        dispatch={store.dispatch}
        createFirestoreInstance={createFirestoreInstance}
      >
        <Switch>
          {/* App */}
          <Route exact path="/" component={App} />

          {/* Login */}
          <Route exact path="/login" component={Login} />
          <Route exact path="/loginfirst" component={LoginFirst} />
          <Redirect from="/inlog" to="/login" />
          <Redirect from="/inloggen" to="/login" />
          <Redirect from="/register" to="/login" />
          <Redirect from="/registreren" to="/login" />

          {/* Privacy Policy */}
          <Route exact path="/privacy-policy" component={PrivacyPolicy} />
          <Redirect from="/privacy" to="/privacy-policy" />
          <Redirect from="/privacypolicy" to="/privacy-policy" />

          {/* Terms of Service */}
          <Route exact path="/terms-of-service" component={TermsOfService} />
          <Redirect from="/tos" to="/terms-of-service" />
          <Redirect from="/terms" to="/terms-of-service" />
          <Redirect from="/termsofservice" to="/terms-of-service" />

          {/* 404 - No route found */}
          <Redirect from="/privacypolicy" to="/privacy-policy" />

          {/* Terms of Service */}
          <Route exact path="/terms-of-service" component={TermsOfService} />
          <Redirect from="/tos" to="/terms-of-service" />
          <Redirect from="/terms" to="/terms-of-service" />
          <Redirect from="/termsofservice" to="/terms-of-service" />

          {/* 404 - No route found */}
          <Redirect from="/privacypolicy" to="/privacy-policy" />

          {/* Terms of Service */}
          <Route exact path="/terms-of-service" component={TermsOfService} />
          <Redirect from="/tos" to="/terms-of-service" />
          <Redirect from="/terms" to="/terms-of-service" />
          <Redirect from="/termsofservice" to="/terms-of-service" />

          {/* 404 - No route found */}
          <Redirect from="/privacypolicy" to="/privacy-policy" />

          {/* Terms of Service */}
          <Route exact path="/terms-of-service" component={TermsOfService} />
          <Redirect from="/tos" to="/terms-of-service" />
          <Redirect from="/terms" to="/terms-of-service" />
          <Redirect from="/termsofservice" to="/terms-of-service" />

          {/* 404 - No route found */}
          <Route component={NotFound} />
        </Switch>
      </ReactReduxFirebaseProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
)

serviceWorker.register()
