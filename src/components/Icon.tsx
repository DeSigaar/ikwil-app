import * as React from 'react'
import styled from 'styled-components'

export interface Props {
  icon: string
  cursor?: string
  size?: number
  onClick?: Function
}

export interface StyledProps {
  readonly icon: string
  readonly size: number
  readonly cursor: string
}

export const StyledIcon = styled.div<StyledProps>`
  height: ${(props): number => props.size}px;
  width: ${(props): number => props.size}px;
  padding: ${(props): number => props.size / 12}px;
  background-image: url(${(props): string => props.icon});
  background-size: ${(props): number => props.size / 1.2}px
    ${(props): number => props.size / 1.2}px;
  background-position: center;
  background-repeat: no-repeat;
  cursor: ${(props): string => props.cursor};
`

const Icon: React.FC<Props> = ({
  icon,
  cursor = 'auto',
  size = 24,
  onClick = (): void => void 0,
}: Props) => {
  return (
    <StyledIcon
      icon={icon}
      size={size}
      onClick={(e): void => onClick(e)}
      cursor={cursor}
    />
  )
}

export default Icon
