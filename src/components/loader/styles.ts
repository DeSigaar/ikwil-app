import styled from 'styled-components'
import { StyledLoaderProps } from './types'

export const StyledLoader = styled.div<StyledLoaderProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${(props): string => props.height};
  width: ${(props): string => props.width};
  --ggs: ${(props): number => props.scale};
  color: ${(props): string => props.color};

  > p {
    margin-top: 8px;
    font-size: ${(props): string => props.fontSize};
    font-family: 'Verdana', sans-serif;
    font-weight: 800;
  }
`
