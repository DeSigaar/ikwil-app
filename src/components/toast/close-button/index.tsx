import * as React from 'react'
import { IconContainer, Close as CloseIcon } from 'src/icons'
import { StyledContainer } from './styles'
import { Props } from './types'

const CloseButton: React.FC<Props> = (props: Props) => {
  return (
    <StyledContainer onClick={props.closeToast}>
      <IconContainer>
        <CloseIcon />
      </IconContainer>
    </StyledContainer>
  )
}

export default CloseButton
