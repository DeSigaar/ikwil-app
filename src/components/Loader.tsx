import * as React from 'react'
import styled from 'styled-components'
import { colors } from 'src/styles'
import {
  IconContainer,
  Loader as LoaderIcon,
  LoaderAlt as LoaderAltIcon,
  Spinner as SpinnerIcon,
  SpinnerAlt as SpinnerAltIcon,
} from 'src/icons'

export interface Props {
  height?: string
  width?: string
  scale?: number
  color?: string
  text?: string
  type?: string
  fontSize?: string
}

export interface StyledProps {
  readonly height: string
  readonly width: string
  readonly scale: number
  readonly color: string
  readonly fontSize: string
}

const StyledLoader = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${(props): string => props.height};
  width: ${(props): string => props.width};
  --ggs: ${(props): number => props.scale};
  color: ${(props): string => props.color};

  > p {
    margin-top: 8px;
    font-size: ${(props): string => props.fontSize};
    font-family: 'Verdana', sans-serif;
    font-weight: 800;
  }
`

const Loader: React.FC<Props> = ({
  height = '100px',
  width = '100%',
  scale = 2,
  color = colors.colors.black,
  text = '',
  type = 'LoaderAlt',
  fontSize = '14px',
}: Props) => {
  let icon: React.ReactNode
  switch (type.toLowerCase()) {
    case 'spinner':
      icon = <SpinnerIcon />
      break
    case 'spinneralt':
      icon = <SpinnerAltIcon />
      break
    case 'loader':
      icon = <LoaderIcon />
      break
    case 'loaderalt':
    default:
      icon = <LoaderAltIcon />
      break
  }

  return (
    <StyledLoader
      height={height}
      width={width}
      scale={scale}
      color={color}
      fontSize={fontSize}
    >
      <IconContainer>{icon}</IconContainer>
      {text && <p>{text}</p>}
    </StyledLoader>
  )
}

export default Loader
