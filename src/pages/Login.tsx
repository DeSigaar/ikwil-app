import * as React from 'react'
import 'firebaseui/dist/firebaseui.css'
import { fireUI, fireStore, fireMessaging } from 'src/utils/firebase'
import configFirebaseUI from 'src/config/firebaseUI'
import { Header } from 'src/components'
import { connect } from 'react-redux'
import { RootState } from 'src/redux/store'
import { RouteComponentProps } from 'react-router'

interface OwnProps {}

interface StateProps {
  isLoggedIn: boolean
}

type Props = OwnProps & StateProps & RouteComponentProps

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
