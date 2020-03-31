import * as React from 'react'
import styled from 'styled-components'
import { IconContainer, Close as CloseIcon } from 'src/icons'

interface Props {
  closeToast?: any // eslint-disable-line @typescript-eslint/no-explicit-any
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: 0.5;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:active {
    opacity: 1;
  }
`

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
