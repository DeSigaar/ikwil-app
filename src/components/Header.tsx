import * as React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'

const HeaderContainer = styled.header``

const Header: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
  return (
    <HeaderContainer>
      <button onClick={(): void => props.history.push('/')}>Naar home</button>
    </HeaderContainer>
  )
}
export default withRouter(Header)
