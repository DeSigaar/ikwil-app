import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Switch, Route, Redirect } from 'react-router'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'
import { App, Login, PrivacyPolicy, TermsOfService, NotFound } from 'src/pages'
import * as serviceWorker from 'src/serviceWorker'
import * as setupEvents from 'src/setupEvents'
import history from 'src/utils/history'
import store from 'src/redux/store'
import { fireApp } from 'src/utils/firebase'
import configReactReduxFirebase from 'src/config/reactReduxFirebase'
import { createGlobalStyle } from 'styled-components'
import { colors, fonts, layout } from 'src/styles'

const GlobalStyle = createGlobalStyle`
*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: ${colors.colors.white};
  margin: ${layout.init.margin};
  padding-top: ${layout.init.padding};
  font-family: ${fonts.font.fontFamily};
}
`

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
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
          <Route component={NotFound} />
        </Switch>
      </ReactReduxFirebaseProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
)

serviceWorker.register({
  updateCacheStatus: setupEvents.changeCacheStatus,
})
setupEvents.init()
