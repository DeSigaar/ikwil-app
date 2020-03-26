import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div``

const NotFound: React.FC = () => {
  return (
    <Container>
      <Link to="/">Naar home</Link>

      <h1>Niks gevonden!</h1>
    </Container>
  )
}

export default NotFound
