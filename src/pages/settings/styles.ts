import styled from 'styled-components'
import { colors, layout } from 'src/styles'
import { StyledContainerProps } from './types'

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
  padding: 0px 15px;
  max-width: 400px;
  margin: auto;

  a {
    text-decoration: none;
  }
`

export const StyledTitle = styled.h2`
  color: ${colors.colors.darkgrey};
  font-size: 16px;
  margin-bottom: 20px;
  align-self: flex-start;
`

export const StyledContainer = styled.div<StyledContainerProps>`
  position: relative;
  height: 48px;
  width: 100%;
  border-radius: 99999px;
  box-shadow: ${colors.shadows.input};
  background: ${colors.colors.white};
  margin-bottom: 16px;
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

export const StyledInput = styled.input`
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

export const StyledButton = styled.button`
  background: ${colors.colors.orange};
  color: ${colors.colors.white};
  text-decoration: none;
  border: none;
  border-radius: 9999px;
  width: 190px;
  height: 30px;
  font-size: 16px;
  font-weight: bold;
  margin: 15px 0px;
  cursor: pointer;
`

export const StyledHorizontalRule = styled.hr`
  background-color: #d3d3d3;
  border: none;
  height: 1px;
  margin: 15px 0 25px;
  width: 100%;
`

export const StyledToggleContainer = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const StyledToggle = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 28px;

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: ${colors.colors.lightgrey};
    transition: 0.2s;
    border-radius: 34px;
    width: 50px;

    &::before {
      position: absolute;
      content: '';
      height: 21px;
      width: 21px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      transition: 0.2s;
      border-radius: 50%;
    }
  }
`

export const StyledCheckbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  border-radius: 9999px;

  &:checked + .slider {
    background-color: ${colors.colors.orange};
  }

  &:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  &:checked + .slider:before {
    transform: translateX(21px);
  }
`
export const StyledToggleLabel = styled.span`
  color: ${colors.colors.darkgrey};
  margin: 3px 0 0 0px;

  a {
    text-decoration: none;
  }
`

export const StyledBottomLabel = styled.div`
  color: ${colors.colors.orange};
  display: flex;
  margin-bottom: 10px;

  p {
    margin-left: 5px;
  }
`
