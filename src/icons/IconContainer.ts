import styled from 'styled-components'

interface Props {
  size?: number
}

export default styled.div<Props>`
  width: ${(props): number => props.size || 26}px;
  height: ${(props): number => props.size || 26}px;
  padding: 2px;
  transition: all 0.2s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
`
