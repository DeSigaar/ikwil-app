import * as React from 'react'
import styled from 'styled-components'
import ReactDOM from 'react-dom'
import { layout, colors } from 'src/styles'

interface Props {
  closeDropdown: Function
  children: React.ReactNode
  open: boolean
}

interface DropdownProps {
  open: boolean
}

const StyledOverlay = styled.div<DropdownProps>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${layout.modalZindex - 1};
  pointer-events: ${(props): string => (props.open ? 'all' : 'none')};
`

const StyledDropdown = styled.div<DropdownProps>`
  cursor: auto;
  position: fixed;
  right: 7.5px;
  top: 55px;
  background: ${colors.colors.white};
  color: ${colors.colors.black};
  opacity: ${(props): number => (props.open ? 1 : 0)};
  pointer-events: ${(props): string => (props.open ? 'all' : 'none')};
  transition: all 0.2s ease-in-out;
  border-radius: 5px;
  box-shadow: ${colors.shadows.default};
  z-index: ${layout.modalZindex};

  &:before {
    content: '';
    position: absolute;
    top: -4px;
    right: 15px;
    width: 12px;
    height: 12px;
    background: ${colors.colors.white};
    box-shadow: ${colors.shadows.default};
    transform: rotate(45deg);
  }
`

const Dropdown: React.FC<Props> = (props: Props) => {
  return ReactDOM.createPortal(
    <div>
      <StyledOverlay
        onClick={(): void => props.closeDropdown(true)}
        open={props.open}
      />
      <StyledDropdown open={props.open}>{props.children}</StyledDropdown>
    </div>,
    document.getElementById('portal-root') as HTMLElement,
  )
}

export default Dropdown
