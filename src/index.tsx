import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Switch, Route, Redirect } from 'react-router-dom'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'
import { PersistGate } from 'redux-persist/integration/react'
import { Helmet } from 'react-helmet'
import styled, { createGlobalStyle } from 'styled-components'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import {
  App,
  Login,
  Settings,
  PrivacyPolicy,
  TermsOfService,
  NotFound,
} from 'src/pages'
import * as serviceWorker from 'src/serviceWorker'
import * as setupEvents from 'src/setupEvents'
import history from 'src/utils/history'
import { store, persistor } from 'src/redux/store'
import { fireApp } from 'src/utils/firebase'
import {
  reactReduxFirebase as configReactReduxFirebase,
  reactToastify as configReactToastify,
} from 'src/config'
import { colors, fonts, layout } from 'src/styles'
import { CloseButton, ToastStyle } from 'src/components/toast'

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
  padding: ${layout.init.padding};
  font-family: ${fonts.font.fontFamily};
}
`

const StyledLoading = styled.div`
  display: block;
  box-sizing: border-box;
  height: 4px;
  border-radius: 4px;
  position: relative;
  transform: scale(var(--ggs, 1));
  width: 18px;

  &::before,
  &::after {
    display: block;
    box-sizing: border-box;
    height: 4px;
    border-radius: 4px;
    background: ${colors.colors.black};
    content: '';
    position: absolute;
  }
  &::before {
    animation: loadbar 2s cubic-bezier(0, 0, 0.58, 1) infinite;
  }
  &::after {
    width: 18px;
    opacity: 0.3;
  }

  @keyframes loadbar {
    0%,
    to {
      left: 0;
      right: 80%;
    }
    25%,
    75% {
      left: 0;
      right: 0;
    }
    50% {
      left: 80%;
      right: 0;
    }
  }
`

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<StyledLoading />} persistor={persistor}>
      <ConnectedRouter history={history}>
        <ReactReduxFirebaseProvider
          firebase={fireApp}
          config={configReactReduxFirebase}
          dispatch={store.dispatch}
          createFirestoreInstance={createFirestoreInstance}
        >
          <GlobalStyle />
          <Helmet defaultTitle="Ik Wil App" titleTemplate="%s - Ik Wil App">
            <meta
              name="description"
              content="Applicatie om de activiteiten van Stichting Ik Wil in te zien"
            />
          </Helmet>
          <ToastStyle />
          <ToastContainer
            {...configReactToastify}
            closeButton={<CloseButton />}
          />

          <Switch>
            {/* App */}
            <Route exact path="/" component={App} />

            {/* Login */}
            <Route exact path="/login" component={Login} />
            <Redirect from="/inlog" to="/login" />
            <Redirect from="/inloggen" to="/login" />
            <Redirect from="/register" to="/login" />
            <Redirect from="/registreren" to="/login" />

            {/* Settings */}
            <Route exact path="/instellingen" component={Settings} />
            <Redirect from="/settings" to="/instellingen" />

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
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
)

serviceWorker.register({
  updateCacheStatus: setupEvents.changeCacheStatus,
})
setupEvents.init()
