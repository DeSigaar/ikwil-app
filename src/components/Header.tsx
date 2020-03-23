import * as React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'
import BackButton from './BackButton'

const HeaderContainer = styled.header``

const Header: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
  return (
    <HeaderContainer>
      <BackButton back={(): void => props.history.push('/')}></BackButton>
    </HeaderContainer>
  )
}
export default withRouter(Header)
