import * as React from 'react'
import 'firebaseui/dist/firebaseui.css'
import { fireUI } from 'src/utils/firebase'
import configFirebaseUI from 'src/config/firebaseUI'
import { Header, BackgroundLogo } from 'src/components'
import Logo from 'src/assets/general/logo-stichting-ik-wil.svg'
import { colors } from 'src/styles/colors'
import styled from 'styled-components'

const StyledLogo = styled.div`
  height: auto;
  width: 60vw;
  max-width: 220px;
  margin: auto;
  padding-top: 3vh;
`
const StyledTitle = styled.h3`
  text-align: center;
  padding: 3vh;
  color: ${colors.darkgrey};
`

const Login: React.FC = () => {
  React.useEffect(() => {
    fireUI.start('#firebase-auth-container', configFirebaseUI)
  }, [])

  return (
    <>
      <Header title="Inloggen" />
      <BackgroundLogo />
      <StyledLogo>
        <img src={Logo} alt="Ik_wil_logo" />
      </StyledLogo>

      <StyledTitle>Welkom bij Stichting Ik Wil</StyledTitle>
      <div id="firebase-auth-container"></div>
    </>
  )
}

export default Login
