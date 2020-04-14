import styled from 'styled-components'
import { layout, colors } from 'src/styles'
import { StyledBackgroundProps } from './types'

export const StyledContainer = styled.div<StyledBackgroundProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${layout.sizes.headerHeight + 1}px;
  background: ${colors.colors.orange};
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${layout.unit * 1.5}px ${layout.unit}px ${layout.unit * 2}px;

  &::after {
    content: '';
    position: absolute;
    left: -2px;
    right: -2px;
    top: ${layout.sizes.headerHeight}px;
    width: calc(100% + 4px);
    height: calc(100vh - ${layout.sizes.headerHeight}px);
    z-index: -1;
    background-image: url(${(props): string => props.background});
    background-repeat: no-repeat;
    background-position: top center;
    pointer-events: none;
  }
`

export const StyledLeft = styled.div`
  display: flex;
  align-items: center;

  color: ${colors.colors.white};
  transition: all 0.2s ease-in-out;

  > * {
    margin-left: 10px;
  }

  > *:first-child {
    margin-left: 0;
  }

  > div {
    margin-left: 0;
    cursor: pointer;

    &:hover,
    &:active {
      color: ${colors.colors.hoverWhite};
    }
  }
`

export const StyledTitle = styled.h1`
  font-size: 28px;
  color: ${colors.colors.white};
`

export const StyledIconContainer = styled.div`
  width: 26px;
  height: 26px;
  padding: 2px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  color: ${colors.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover,
  &:active {
    color: ${colors.colors.hoverWhite};
  }
`

export const StyledMoreIcon = styled.div`
  box-sizing: border-box;
  position: relative;
  display: block;
  width: 4px;
  height: 4px;
  background: currentColor;
  border-radius: 100%;
  transform: scale(1.2);
  &::after,
  &::before {
    content: '';
    position: absolute;
    box-sizing: border-box;
    display: block;
    width: 4px;
    height: 4px;
    background: currentColor;
    border-radius: 100%;
  }
  &::after {
    left: 0;
    top: 6px;
  }
  &::before {
    top: -6px;
    right: 0;
  }
  &:hover,
  &:active {
    color: ${colors.colors.hoverWhite};
  }
`

export const StyledDropdownItem = styled.div`
  --ggs: 0.9;

  cursor: pointer;
  position: relative;
  font-size: 14px;
  color: ${colors.colors.black};
  padding: ${layout.unit * 0.65}px ${layout.unit}px;
  background: ${colors.colors.white};
  transition: all 0.2s ease-in-out;
  min-width: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  -webkit-user-drag: none;

  &:hover,
  &:active {
    background: ${colors.colors.hoverWhite};
  }

  &:first-of-type {
    border-top-left-radius: ${layout.borderRadius}px;
    border-top-right-radius: ${layout.borderRadius}px;
  }
  &:last-of-type {
    border-bottom-right-radius: ${layout.borderRadius}px;
    border-bottom-left-radius: ${layout.borderRadius}px;
  }

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -0.5px;
    width: 85%;
    margin: 0 7.5%;
    border-bottom: 1px solid ${colors.colors.black};
    opacity: 0.2;
    z-index: 1;
  }
  &:last-of-type:after {
    border-bottom: none;
  }

  > div {
    margin-left: 25px;
    color: ${colors.colors.black};
    opacity: 0.75;
  }
`
