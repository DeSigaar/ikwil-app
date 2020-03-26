import * as React from 'react'
import styled from 'styled-components'
import TopBarWave from 'src/assets/general/top_bar_wave.svg'
import SettingsIcon from 'src/assets/general/icon_settings_white.svg'
import { layout, colors } from 'src/styles'
import { Icon } from 'src/components'

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
  height: ${layout.sizes.headerHeight + 1}px;
  background: ${colors.colors.ikWilOrange};
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${layout.unit * 1.5}px 5vw ${layout.unit * 2}px;

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
  color: ${colors.colors.white};
`

const Header: React.FC<Props> = (props: Props) => {
  return (
    <Container background={TopBarWave}>
      <Title>{props.title}</Title>

      <Icon icon={SettingsIcon}></Icon>
    </Container>
  )
}

export default Header
