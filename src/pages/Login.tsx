import * as React from 'react'
import 'firebaseui/dist/firebaseui.css'
import { fireUI, fireStore, fireMessaging } from 'src/utils/firebase'
import configFirebaseUI from 'src/config/firebaseUI'
import { connect } from 'react-redux'
import { RootState } from 'src/redux/store'
import { RouteComponentProps } from 'react-router'
import { Header, BackgroundLogo } from 'src/components'
import Logo from 'src/assets/general/logo-stichting-ik-wil.svg'
import { colors } from 'src/styles/colors'
import styled from 'styled-components'

interface OwnProps {}

interface StateProps {
  isLoggedIn: boolean
}

type Props = OwnProps & StateProps & RouteComponentProps

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

const Login: React.FC<Props> = (props: Props) => {
  const askForPermission = async (uid: string): Promise<any> => {
    await fireMessaging
      .requestPermission()
      .then(async () => {
        const token = await fireMessaging.getToken()
        fireStore.collection('users').doc(uid).update({ pushToken: token })
      })
      .catch((err) => console.error(err)) // eslint-disable-line no-console
  }

  React.useEffect(() => {
    if (props.isLoggedIn) props.history.push('/')

    fireUI.start('#firebase-auth-container', {
      ...configFirebaseUI,
      callbacks: {
        signInSuccessWithAuthResult: (authResult): boolean => {
          askForPermission(authResult.user.uid)
          return false
        },
      },
    })
  }, [props.isLoggedIn, props.history])

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

const mapStateToProps = (state: RootState, ownProps: OwnProps): StateProps => {
  return {
    ...ownProps,
    isLoggedIn: !state.firebase.auth.isEmpty,
  }
}

export default connect(mapStateToProps, null)(Login)
