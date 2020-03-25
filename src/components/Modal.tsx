import * as React from 'react'
import styled from 'styled-components'
import ReactDOM from 'react-dom'
import CloseIcon from '../assets/general/icon_close_white.svg'

interface Props {
  title: string
  children: any
  closeModal: Function
}

interface BackgroundProps {
  readonly background: string
}

const StyledBackground = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 998;
`

const StyledContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  max-height: 520px;
  margin: auto 15px;
  border-radius: 6px;
  background-color: #fff;
  z-index: 999;
`

const StyledTitle = styled.h2`
  font-size: 24px;
  color: white;
  background-color: #f38c00;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
  padding: 15px;
  margin: 0;
`

const StyledCloseIcon = styled.div<BackgroundProps>`
  position: absolute;
  height: 25px;
  width: 25px;
  top: 0;
  right: 0;
  margin: 17px 13px 0 0;
  background-image: url(${(props): string => props.background});
`

const Modal: React.FC<Props> = (props: Props) => {
  return ReactDOM.createPortal(
    <div>
      <StyledBackground />
      <StyledContainer>
        <StyledTitle>{props.title}</StyledTitle>
        <StyledCloseIcon
          background={CloseIcon}
          onClick={(): void => props.closeModal(false)}
        />
        <div>{props.children}</div>
      </StyledContainer>
    </div>,
    document.getElementById('portal-root') as HTMLElement,
  )
}

export default Modal
