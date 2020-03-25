import * as React from 'react'
import 'firebaseui/dist/firebaseui.css'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { fireUI } from '../utils/firebase'
import configFirebaseUI from '../config/firebaseUI'
import { Header, BackButton } from '../components'
import { RouteComponentProps } from 'react-router'

const LoginContainer = styled.div``

const Login: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
  React.useEffect(() => {
    fireUI.start('#firebase-auth-container', configFirebaseUI)
  }, [])

  return (
    <>
      <Header title={'Inloggen'} />

      <BackButton back={(): void => props.history.push('/')}></BackButton>

      <LoginContainer>
        <div id="firebase-auth-container"></div>
      </LoginContainer>
    </>
  )
}

export default withRouter(Login)
