import * as React from 'react'
import { Link } from 'react-router-dom'
import { Header, Main } from '../components/index'

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <>
      <div>
        <Link to="/login">Inloggen</Link>
        <Link to="/registeren">Registreren</Link>
      </div>
      <Header />
      <Main />
    </>
  )
}

export default App
