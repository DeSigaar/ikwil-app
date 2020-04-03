import * as React from 'react'
import 'firebaseui/dist/firebaseui.css'
import { fireUI } from 'src/utils/firebase'
import configFirebaseUI from 'src/config/firebaseUI'
import { Header } from 'src/components'
import Logo from 'src/assets/general/logo-stichting-Ik-Wil.svg'

const Login: React.FC = () => {
  React.useEffect(() => {
    fireUI.start('#firebase-auth-container', configFirebaseUI)
  }, [])

  return (
    <>
      <Header title="Inloggen" />
      <div
        style={{
          height: 'auto',
          width: '60vw',
          maxWidth: '220px',
          margin: 'auto',
          paddingTop: '3vh',
        }}
      >
        <img src={Logo} />
      </div>
      <h3 style={{ textAlign: 'center', padding: '3vh' }}>
        Welkom bij Stichting ik wil
      </h3>
      <div id="firebase-auth-container"></div>
    </>
  )
}

export default Login
