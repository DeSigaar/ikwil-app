import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const MainContainer = styled.div``

const Main: React.FC = () => {
  return (
    <MainContainer>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam at dolor
        voluptates odio mollitia, aliquam totam consequatur sunt autem eaque,
        minima, quis cupiditate tempore quas facilis. Quisquam alias adipisci
        est.
      </p>

      <Link to="/privacy-policy">Privacy Policy</Link>
      <Link to="/terms-of-service">Terms of Service</Link>
    </MainContainer>
  )
}
export default Main
