import * as React from 'react'
import { Header, BackgroundLogo } from 'src/components'

const NotFound: React.FC = () => {
  return (
    <>
      <Header title="Niks gevonden" />
      <BackgroundLogo />

      <h1>Niks gevonden!</h1>
      <p>
        Check even of je de URL goed hebt geschreven, anders ga terug naar het
        startscherm.
      </p>
    </>
  )
}

export default NotFound
