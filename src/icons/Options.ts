import styled from 'styled-components'

export default styled.div`
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(var(--ggs, 1));
  width: 10px;
  height: 2px;
  box-shadow: -3px 4px 0 0, 3px -4px 0 0;

  &::before,
  &::after {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 8px;
    height: 8px;
    border: 2px solid;
    border-radius: 100%;
  }
  &::before {
    top: -7px;
    left: -4px;
  }
  &::after {
    bottom: -7px;
    right: -4px;
  }
`
