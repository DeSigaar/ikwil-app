import * as React from 'react'
import styled from 'styled-components'
import { Header } from '../components'

const Container = styled.div``

const NotFound: React.FC = () => {
  return (
    <Container>
      <Header />

      <h1>Niks gevonden!</h1>
    </Container>
  )
}

export default NotFound
