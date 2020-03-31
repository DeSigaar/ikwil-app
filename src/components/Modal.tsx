import * as React from 'react'
import styled from 'styled-components'
import ReactDOM from 'react-dom'
import { layout, colors } from 'src/styles'

interface Props {
  title: string
  children: React.ReactNode
  closeModal: Function
}

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.colors.modalOverlayBackground};
  z-index: ${layout.modalZindex - 1};
`

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  bottom: 0;
  left: 0;
  right: 0;
  min-height: ${layout.unit * 10}px;
  height: fit-content;
  max-height: 90vh;
  margin: auto;
  border-radius: ${layout.borderRadius}px;
  background-color: ${colors.colors.white};
  z-index: ${layout.modalZindex};
  display: table;
  width: 90%;
  max-width: 400px;
  transform: translateY(-50%);
`

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${layout.unit}px;
  background-color: ${colors.colors.orange};
  width: 100%;
  height: ${layout.unit * 4}px;
  border-top-right-radius: ${layout.borderRadius}px;
  border-top-left-radius: ${layout.borderRadius}px;
`

const StyledTitle = styled.h2`
  font-size: 24px;
  color: ${colors.colors.white};
`

const StyledIconContainer = styled.div`
  width: auto;
  height: auto;
  background: ${colors.colors.white};
  border-radius: ${layout.borderRadius}px;
  padding: 2px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover,
  &:active {
    background: ${colors.colors.hoverWhite};
  }
`

const StyledCloseIcon = styled.div`
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(1);
  width: 22px;
  height: 22px;
  border: 2px solid transparent;
  border-radius: 40px;

  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 16px;
    height: 4px;
    background: ${colors.colors.orange};
    transform: rotate(45deg);
    border-radius: 5px;
    top: 7px;
    left: 1px;
  }
  &::after {
    transform: rotate(-45deg);
  }
`

const StyledContent = styled.div`
  width: 100%;
  height: auto;
  padding: ${layout.unit}px;
  border-bottom-right-radius: ${layout.borderRadius}px;
  border-bottom-left-radius: ${layout.borderRadius}px;
`

const Modal: React.FC<Props> = (props: Props) => {
  return ReactDOM.createPortal(
    <div>
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
    </div>,
    document.getElementById('portal-root') as HTMLElement,
  )
}

export default Modal
