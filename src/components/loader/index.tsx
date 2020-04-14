import * as React from 'react'
import { colors } from 'src/styles'
import {
  IconContainer,
  Loader as LoaderIcon,
  LoaderAlt as LoaderAltIcon,
  Spinner as SpinnerIcon,
  SpinnerAlt as SpinnerAltIcon,
} from 'src/icons'
import { StyledLoader } from './styles'
import { Props } from './types'

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
