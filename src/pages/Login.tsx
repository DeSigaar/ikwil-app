import * as React from 'react'
import 'firebaseui/dist/firebaseui.css'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { fireUI } from 'src/utils/firebase'
import configFirebaseUI from 'src/config/firebaseUI'
import { Header } from 'src/components'

const LoginContainer = styled.div``

const Login: React.FC = () => {
  React.useEffect(() => {
    fireUI.start('#firebase-auth-container', configFirebaseUI)
  }, [])

  return (
    <>
      <Header title={'Inloggen'} />

      <LoginContainer>
        <div id="firebase-auth-container"></div>
      </LoginContainer>
    </>
  )
}

export default withRouter(Login)
