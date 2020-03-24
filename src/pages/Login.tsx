import * as React from 'react'
import 'firebaseui/dist/firebaseui.css'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { fireUI } from '../utils/firebase'
import configFirebaseUI from '../config/firebaseUI'
import { Header } from '../components'
import { RouteComponentProps } from 'react-router'
import BackButton from '../components/BackButton'

const LoginContainer = styled.div``

const Login: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
  React.useEffect(() => {
    fireUI.start('#firebase-auth-container', configFirebaseUI)
  }, [])

  return (
    <>
      <Header />
      <BackButton back={(): void => props.history.push('/')}></BackButton>
      <h1>Inloggen</h1>

      <LoginContainer>
        <div id="firebase-auth-container"></div>
      </LoginContainer>
    </>
  )
}

export default withRouter(Login)
