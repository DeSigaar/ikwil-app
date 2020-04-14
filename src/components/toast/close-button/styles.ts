import styled from 'styled-components'

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: 0.5;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:active {
    opacity: 1;
  }
`
