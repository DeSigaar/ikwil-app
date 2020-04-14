import styled from 'styled-components'
import { layout, colors } from 'src/styles'
import { StyledDropdownProps } from './types'

export const StyledOverlay = styled.div<StyledDropdownProps>`
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

export const StyledDropdown = styled.div<StyledDropdownProps>`
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
