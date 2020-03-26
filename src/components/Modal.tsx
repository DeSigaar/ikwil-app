import * as React from 'react'
import styled from 'styled-components'
import ReactDOM from 'react-dom'
import CloseIcon from 'src/assets/general/icon_close_white.svg'
import { layout, colors } from 'src/styles'
import { Icon } from 'src/components'

interface Props {
  title: string
  children: React.ReactNode
  closeModal: Function
}

const StyledOverlay = styled.div`
  position: absolute;
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
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  min-height: ${layout.unit * 10}px;
  height: fit-content;
  max-height: 90vh;
  margin: auto ${layout.unit}px;
  border-radius: ${layout.borderRadius}px;
  background-color: ${colors.colors.white};
  z-index: ${layout.modalZindex};
  display: flex;
  flex-direction: column;
`

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${layout.unit}px;
  background-color: ${colors.colors.ikWilOrange};
  width: 100%;
  height: ${layout.unit * 4}px;
  border-top-right-radius: ${layout.borderRadius}px;
  border-top-left-radius: ${layout.borderRadius}px;
`

const StyledTitle = styled.h2`
  font-size: 24px;
  color: ${colors.colors.white};
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
      <StyledOverlay />
      <StyledModal>
        <StyledHeader>
          <StyledTitle>{props.title}</StyledTitle>
          <Icon
            icon={CloseIcon}
            size={32}
            onClick={(): void => props.closeModal(false)}
          />
        </StyledHeader>

        <StyledContent>{props.children}</StyledContent>
      </StyledModal>
    </div>,
    document.getElementById('portal-root') as HTMLElement,
  )
}

export default Modal
