import * as React from 'react'
import styled from 'styled-components'
import TopBarWave from '../assets/general/top_bar_wave.svg'
import SettingsIcon from '../assets/general/icon_settings_white.svg'
import { layout } from '../utils/styles'

interface Props {
  title: string
}

interface BackgroundProps {
  readonly background: string
}

const Container = styled.div<BackgroundProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0;
  padding: 0;
  height: ${layout.sizes.headerHeight + 1}px;
  background: #f38c00;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 5vw;

  &::after {
    content: '';
    position: absolute;
    left: -2px;
    right: -2px;
    top: ${layout.sizes.headerHeight}px;
    width: calc(100% + 4px);
    height: calc(100vh - ${layout.sizes.headerHeight}px);
    z-index: -1;
    background-image: url(${(props): string => props.background});
    background-repeat: no-repeat;
    background-position: top center;
    pointer-events: none;
  }
`

const Title = styled.h1`
  font-size: 28px;
  color: white;
  padding: 0;
  margin: 0;
`

const StyledSettingsIcon = styled.div<BackgroundProps>`
  width: 24px;
  height: 24px;
  background-image: url(${(props): string => props.background});
  background-repeat: no-repeat;
  background-position: center;
`

const Header: React.FC<Props> = (props: Props) => {
  return (
    <Container background={TopBarWave}>
      <Title>{props.title}</Title>

      <StyledSettingsIcon background={SettingsIcon} />
    </Container>
  )
}

export default Header
