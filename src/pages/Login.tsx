import * as React from 'react'
import 'firebaseui/dist/firebaseui.css'
import { fireUI } from 'src/utils/firebase'
import configFirebaseUI from 'src/config/firebaseUI'
import { Header } from 'src/components'

const Login: React.FC = () => {
  React.useEffect(() => {
    fireUI.start('#firebase-auth-container', configFirebaseUI)
  }, [])

  return (
    <>
      <Header title="Inloggen" />

      <div id="firebase-auth-container"></div>
    </>
  )
}

export default Login
