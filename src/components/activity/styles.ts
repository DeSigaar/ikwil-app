import styled from 'styled-components'
import { colors, layout, fonts } from 'src/styles'
import {
  StyledActivityItemProps,
  StyledToggleStyleProps,
  StyledDetailStyleProps,
  StyledActiveStyleProps,
} from './types'

export const ActivityContainer = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
`

export const ActivityTimeline = styled.div`
  width: 15vw;
`

export const ActivityItem = styled.div<StyledActivityItemProps>`
  width: 75vw;
  margin: ${({ first }): string =>
    first ? `0 0 ${layout.unit * 0.5}px 0` : `${layout.unit * 0.5}px 0`};
  max-height: ${({ toggle }): string =>
    toggle ? (layout.isSmallScreen ? '250px' : '230px') : '50px'};
  min-height: ${({ toggle }): string =>
    toggle ? (layout.isSmallScreen ? '230px' : '230px') : '50px'};
  overflow: hidden;
  transition: 0.3s;
  box-shadow: ${colors.shadows.default};
  display: flex;
  flex-direction: column;
  background-color: ${({ backgroundColor, inverted }): string =>
    inverted ? backgroundColor : colors.colors.white};
  border-radius: ${layout.borderRadius}px;
  color: ${({ inverted }): string =>
    inverted ? colors.colors.white : colors.colors.darkgrey};
  font-weight: ${fonts.fontWeights.bold};
  padding: 5px;
`

export const ActivityBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const LogoAndTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 85%;

  > div {
    min-width: 40px;
  }

  span {
    margin-left: ${layout.isSmallScreen ? '5' : '10'}px;
    padding: 5px;
    flex-grow: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
export const Toggle = styled.button<StyledToggleStyleProps>`
  width: 40px;
  height: 40px;
  border: 0;
  padding: 0;

  background: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: ${({ toggle }): string => (toggle ? 'rotate(180deg)' : '')};
  transition: 0.2s;

  &:focus {
    outline: unset;
  }
`
export const Details = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: unset;
  font-size: ${fonts.size.small};
  font-weight: ${fonts.fontWeights.normal};
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding-left: ${layout.isSmallScreen ? '25' : '35'}px;
  margin-top: 2px;
`
export const Detail = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin: 3px 0;

  div {
    max-width: 70%;
    display: flex;
    flex-direction: column;
  }
  span {
    margin-left: 7px;
  }
`
export const DetailIcon = styled.img<StyledDetailStyleProps>`
  height: ${(props): number => props.size}px;
  width: ${(props): number => props.size}px;
  margin-right: 5px;
`
export const Line = styled.hr`
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  border-width: 1px;
  opacity: 0.6;
  width: 90%;
  border-style: solid;
`
export const Meedoen = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  font-size: ${fonts.size.normal}px;
  font-weight: ${fonts.fontWeights.normal};

  span {
    text-align: center;
  }
`
export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  margin: 10px;
`
export const ActivityButton = styled.button<StyledActiveStyleProps>`
  border: 0;
  margin: 0 2px;
  padding: 3px 9px;
  min-width: 60px;
  height: 25px;
  color: ${({ categoryColor }): string => categoryColor};
  background: unset;
  background-color: ${colors.colors.white};
  opacity: ${({ notActive }): number => (notActive ? 0.8 : 1)};
  cursor: pointer;
  font-weight: ${fonts.fontWeights.bold};
  border-radius: ${layout.borderRadiusBig}px;
  font-size: ${layout.isSmallScreen ? fonts.size.small : fonts.size.normal}px;
`
