import * as React from 'react'
import 'firebaseui/dist/firebaseui.css'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { fireUI } from '../utils/firebase'
import configFirebaseUI from '../config/firebaseUI'
import { Header } from '../components'

import BackButton from '../components/BackButton'

const LoginContainer = styled.div``

const Login: React.FC = () => {
  React.useEffect(() => {
    fireUI.start('#firebase-auth-container', configFirebaseUI)
  }, [])

  return (
    <>
      <Header />

      <h1>Inloggen</h1>

      <LoginContainer>
        <div id="firebase-auth-container"></div>
      </LoginContainer>
    </>
  )
}

export default withRouter(Login)
