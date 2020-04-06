import * as React from 'react'
import styled from 'styled-components'
import { Modal, Filter, Icon } from 'src/components'
import FilterIcon from 'src/assets/general/icon_filter_grey.svg'
import { layout, colors } from 'src/styles'
import { IconContainer, Search as SearchIcon } from 'src/icons'

interface StyledProps {
  focus: boolean
}

const StyledContainer = styled.div<StyledProps>`
  position: relative;
  height: 48px;
  width: 100%;
  border-radius: 99999px;
  box-shadow: ${colors.shadows.xs};
  background: ${colors.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;

  > div {
    z-index: 1;
    transition: all 0.2s ease-in-out;
    opacity: ${(props): number => (props.focus ? 0.75 : 0.25)};
  }

  > div:last-of-type {
    padding: 24px;
    opacity: 1;
  }
`

const StyledInput = styled.input`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  flex-grow: 1;
  background: none;
  border: none;
  border-radius: 99999px;
  outline: none;
  padding: 0 ${layout.unit * 3}px;
  font-size: 16px;
  color: ${colors.colors.black};
  transition: all 0.2s ease-in-out;

  &:focus {
    box-shadow: inset ${colors.shadows.default};
  }

  &::placeholder {
    color: ${colors.colors.black};
    opacity: 0.5;
  }
`

const SearchBar: React.FC = () => {
  const [modalShowing, setModalShowing] = React.useState(false)
  const [focused, setFocused] = React.useState(false)

  let inputElement: any // eslint-disable-line @typescript-eslint/no-explicit-any

  return (
    <>
      <StyledContainer focus={focused}>
        <IconContainer onClick={(): void => inputElement.focus()} size={48}>
          <SearchIcon />
        </IconContainer>
        <StyledInput
          type="search"
          placeholder="Zoeken..."
          ref={(input): void => {
            inputElement = input
          }}
          onFocus={(): void => setFocused(true)}
          onBlur={(): void => setFocused(false)}
        />
        <Icon
          icon={FilterIcon}
          onClick={(): void => setModalShowing(!modalShowing)}
          cursor="pointer"
        />
      </StyledContainer>
      {modalShowing ? (
        <Modal title="Filters" closeModal={setModalShowing}>
          <Filter />
        </Modal>
      ) : (
        <></>
      )}
    </>
  )
}

export default SearchBar
