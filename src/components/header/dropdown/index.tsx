import * as React from 'react'
import ReactDOM from 'react-dom'
import { StyledOverlay, StyledDropdown } from './styles'
import { Props } from './types'

const Dropdown: React.FC<Props> = (props: Props) => {
  return ReactDOM.createPortal(
    <>
      <StyledOverlay
        onClick={(): void => props.closeDropdown(true)}
        open={props.open}
      />
      <StyledDropdown open={props.open}>{props.children}</StyledDropdown>
    </>,
    document.getElementById('portal-root') as HTMLElement,
  )
}

export default Dropdown
