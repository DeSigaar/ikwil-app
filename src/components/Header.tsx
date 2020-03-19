import * as React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.header``

interface Props {
  name: string
}

const Header: React.FC<Props> = name => {
  return (
    <HeaderContainer>
      <h1>{name}</h1>
    </HeaderContainer>
  )
}
Header.defaultProps = {
  name: 'App',
}
export default Header
