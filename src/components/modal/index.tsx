import * as React from 'react'
import ReactDOM from 'react-dom'
import {
  StyledOverlay,
  StyledModal,
  StyledHeader,
  StyledTitle,
  StyledIconContainer,
  StyledCloseIcon,
  StyledContent,
} from './styles'
import { Props } from './types'

const Modal: React.FC<Props> = (props: Props) => {
  return ReactDOM.createPortal(
    <>
      <StyledOverlay onClick={(): void => props.closeModal(false)} />
      <StyledModal>
        <StyledHeader>
          <StyledTitle>{props.title}</StyledTitle>

          <StyledIconContainer onClick={(): void => props.closeModal(false)}>
            <StyledCloseIcon></StyledCloseIcon>
          </StyledIconContainer>
        </StyledHeader>

        <StyledContent>{props.children}</StyledContent>
      </StyledModal>
    </>,
    document.getElementById('portal-root') as HTMLElement,
  )
}

export default Modal
