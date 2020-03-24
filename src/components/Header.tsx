import * as React from 'react'
import styled from 'styled-components'
import TopBarWave from '../assets/general/top_bar_wave.svg'
import SettingsIcon from '../assets/general/icon_settings_white.svg'
import { layout } from '../utils/styles'

interface Props {
  title: string
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0;
  padding: 0;
  height: ${layout.sizes.headerHeight}px;
  z-index: 10;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: ${layout.sizes.headerHeight * 0.8}px;

    background-color: #f38c00;
    z-index: -2;
  }

  @media only screen and (min-width: 250px) {
    &::before {
      height: ${layout.sizes.headerHeight * 0.6}px;
    }
  }

  @media only screen and (min-width: 500px) {
    &::before {
      height: ${layout.sizes.headerHeight * 0.4}px;
    }
  }
`

interface BackgroundProps {
  readonly background: string
}

const StyledTopBarWave = styled.div<BackgroundProps>`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
  height: ${layout.sizes.headerHeight}px;
  background-image: url(${(props): string => props.background});
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: 100%;
`

const Title = styled.h1`
  font-size: 28px;
  color: white;
  margin: 37px 7vw 0 15px;
  padding: 0;
`

const StyledSettingsIcon = styled.div<BackgroundProps>`
  position: fixed;
  top: 0;
  right: 0;
  margin: 42px 21px 0px 0px;
  width: 24px;
  height: 24px;
  background-image: url(${(props): string => props.background});
`

const Header: React.FC<Props> = (props: Props) => {
  return (
    <Container>
      <StyledTopBarWave background={TopBarWave} />

      <Title>{props.title}</Title>

      <StyledSettingsIcon background={SettingsIcon} />
    </Container>
  )
}

export default Header
