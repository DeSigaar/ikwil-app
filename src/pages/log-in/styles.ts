import styled from 'styled-components'
import { colors } from 'src/styles'

export const StyledLogo = styled.div`
  height: auto;
  width: 60vw;
  max-width: 220px;
  margin: auto;
  padding-top: 3vh;

  > img {
    user-select: none;
    -webkit-user-drag: none;
  }
`

export const StyledTitle = styled.h3`
  text-align: center;
  padding: 3vh;
  color: ${colors.colors.darkgrey};
`
