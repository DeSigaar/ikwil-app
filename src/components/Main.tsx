import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const MainContainer = styled.div``

interface Props {}

const Main: React.FC<Props> = () => {
  return (
    <MainContainer>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam at dolor voluptates odio mollitia, aliquam totam
        consequatur sunt autem eaque, minima, quis cupiditate tempore quas facilis. Quisquam alias adipisci est.
      </p>
      <Link to="/header">to header</Link>
    </MainContainer>
  )
}
export default Main
