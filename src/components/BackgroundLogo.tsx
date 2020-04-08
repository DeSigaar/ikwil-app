import * as React from 'react'
import styled from 'styled-components'
import StichtingIcon from 'src/assets/general/logo-ik-wil.svg'

interface BackgroundProps {
  background: any
}

const StyledLogo = styled.div<BackgroundProps>`
  background-image: url(${(props): string => props.background});
  background-position: center;
  background-repeat: no-repeat;
  width: 500px;
  height: 500px;
  position: fixed;
  right: 0;
  margin-right: -220px;
  opacity: 0.15;
  z-index: -9999;
`

const BackgroundLogo: React.FC = () => {
  return <StyledLogo background={StichtingIcon} />
}

export default BackgroundLogo
