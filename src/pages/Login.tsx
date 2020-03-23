import * as React from 'react'
import * as firebase from 'firebase/app'
import 'firebaseui/dist/firebaseui.css'
import { withRouter } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'
import { fireUI } from '../utils/firebase'
import styled from 'styled-components'

const LoginContainer = styled.div``

export interface Props {
  shouldRemember: boolean
  onUsernameChange: (username: string) => void
  onPasswordChange: (password: string) => void
  onRememberChange: (remember: boolean) => void
  onSubmit: (username: string, password: string) => void
}

export interface State {
  username: string
  password: string
  remember: boolean
}

class Login extends React.Component<Props & RouteComponentProps, State> {
  state: State = {
    username: '',
    password: '',
    remember: this.props.shouldRemember,
  }

  componentDidMount = (): void => {
    fireUI.start('#firebase-auth-container', {
      signInSuccessUrl: '/',
      signInFlow: 'redirect',
      signInOptions: [
        {
          provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
          recaptchaParameters: {
            size: 'invisible',
          },
          defaultCountry: 'NL',
          loginHint: '+31612345678',
        },
        {
          provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          scopes: ['public_profile', 'email'],
        },
        {
          provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        },
      ],

      tosUrl: '/terms-of-service',
      privacyPolicyUrl: '/privacy-policy',
    })
  }

  render = (): React.ReactNode => {
    return (
      <>
        <button onClick={(): void => this.props.history.goBack()}>Terug</button>

        <h1>Inloggen</h1>

        <LoginContainer>
          <div id="firebase-auth-container"></div>
        </LoginContainer>
      </>
    )
  }
}
export default withRouter(Login)
