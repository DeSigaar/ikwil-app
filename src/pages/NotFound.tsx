import * as React from 'react'
import styled from 'styled-components'

const Container = styled.div``

interface Props {}

const NotFound: React.FC<Props> = () => {
  return (
    <Container>
      <h1>Niks gevonden!</h1>
    </Container>
  )
}

export default NotFound
