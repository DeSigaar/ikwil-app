import * as React from 'react'
import styled from 'styled-components'
import { Modal, Filter } from 'src/components'
import SearchIcon from 'src/assets/general/icon_search_grey.svg'
import FilterIcon from 'src/assets/general/icon_filter_grey.svg'

const StyledInput = styled.input`
  height: 37px;
  width: 100%;
  border: 1px solid #e0e1e3;
  border-radius: 20px;
  font-size: 16px;
  color: #bec4cb;
  padding: 0px 40px;
`

interface BackgroundProps {
  readonly background: string
}

const StyledSearchIcon = styled.label<BackgroundProps>`
  position: absolute;
  margin: 10px 0px 0px 13px;
  width: 18px;
  height: 18px;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${(props): string => props.background});
`

const StyledFilterIcon = styled.label<BackgroundProps>`
  position: absolute;
  margin: 11px 27px 0px 0px;
  right: 0;
  width: 18px;
  height: 18px;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${(props): string => props.background});
`

const SearchBar: React.FC = () => {
  const [modalShowing, setModalShowing] = React.useState(false)

  return (
    <div>
      <StyledSearchIcon background={SearchIcon} />
      <StyledInput type="search" placeholder="Zoeken..." />
      <StyledFilterIcon
        background={FilterIcon}
        onClick={(): void => setModalShowing(!modalShowing)}
      />
      {modalShowing ? (
        <Modal title={'Filters'} closeModal={setModalShowing}>
          <Filter />
        </Modal>
      ) : (
        <></>
      )}
    </div>
  )
}

export default SearchBar
