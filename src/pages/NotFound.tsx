import * as React from 'react'
import { Link } from 'react-router-dom'
import { Header } from 'src/components'

const NotFound: React.FC = () => {
  return (
    <>
      <Header title="Niks gevonden" />

      <Link to="/">
        <button>Naar home</button>
      </Link>

      <h1>Niks gevonden!</h1>
    </>
  )
}

export default NotFound
