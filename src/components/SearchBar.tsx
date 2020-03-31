import * as React from 'react'
import styled from 'styled-components'
import { Modal, Filter, Icon } from 'src/components'
import SearchIcon from 'src/assets/general/icon_search_grey.svg'
import FilterIcon from 'src/assets/general/icon_filter_grey.svg'
import { layout, colors } from 'src/styles'

const StyledContainer = styled.div`
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
`

const StyledInput = styled.input`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  flex-grow: 1;
  background: none;
  border: none;
  border-radius: 99999px;
  outline: none;
  padding: 0 ${layout.unit * 3}px;
  font-size: 16px;
`

const SearchBar: React.FC = () => {
  const [modalShowing, setModalShowing] = React.useState(false)

  return (
    <>
      <StyledContainer>
        <Icon icon={SearchIcon} />
        <StyledInput type="search" placeholder="Zoeken..." />
        <Icon
          icon={FilterIcon}
          onClick={(): void => setModalShowing(!modalShowing)}
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
