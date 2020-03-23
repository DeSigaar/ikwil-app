import * as React from 'react'
import 'firebaseui/dist/firebaseui.css'
import { withRouter } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'
import styled from 'styled-components'
import { fireUI } from '../utils/firebase'
import configFirebaseUI from '../config/firebaseUI'

const LoginContainer = styled.div``

const Login: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
  React.useEffect(() => {
    fireUI.start('#firebase-auth-container', configFirebaseUI)
  }, [])

  return (
    <>
      <button onClick={(): void => props.history.push('/')}>
        Terug naar home
      </button>

      <h1>Inloggen</h1>

      <LoginContainer>
        <div id="firebase-auth-container"></div>
      </LoginContainer>
    </>
  )
}

export default withRouter(Login)
