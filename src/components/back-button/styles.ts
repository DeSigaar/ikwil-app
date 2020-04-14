import styled from 'styled-components'
import { colors, layout } from 'src/styles'

export const StyledContainer = styled.div`
  display: inline-flex;
  align-items: center;
  margin: -${layout.unit * 2}px 0 ${layout.unit}px;
  cursor: pointer;
  padding: ${layout.unit}px;

  > div {
    margin: 2px 5px auto 0;
  }
`

export const StyledText = styled.p`
  font-size: 16px;
  color: ${colors.colors.orange};
  user-select: none;
  -webkit-user-drag: none;
`
