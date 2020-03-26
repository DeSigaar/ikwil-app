import * as React from 'react'
import styled from 'styled-components'
import TickIcon from '../assets/general/icon_tick_white.svg'

interface Props {
  name: string
  icon?: string
  color: string
}

interface BackgroundProps {
  readonly background: string
}

interface StyledProps {
  checked: boolean
  background: string
}

const StyledIcon = styled.div<BackgroundProps>`
  background-image: url(${(props): string => props.background});
  background-position: center;
  background-repeat: no-repeat;
  display: inline-block;
  position: absolute;
  height: 27px;
  width: 27px;
  margin: 0 20px 0 0;
`

const StyledName = styled.h3`
  display: inline-block;
  position: absolute;
  margin-top: 2px;
  font-size: 16px;
  color: ${(props) => props.color};
`

const StyledCheckbox = styled.div<StyledProps>`
  display: inline-block;
  width: 24px;
  height: 24px;
  margin: 0 18px 20px 0;
  border: ${({ checked }) => (checked ? 'none' : '2px solid #d3d3d3')};
  background-color: ${({ checked }) => (checked ? 'orange' : 'white')};
  background-image: url(${(props): string => props.background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 18px 18px;
`

const StyledSpan = styled.span`
  display: inline-block;
  width: 35px;
`

const FilterItem: React.FC<Props> = (props: Props) => {
  const [checked, setChecked] = React.useState(false)

  return (
    <div>
      <StyledCheckbox
        background={TickIcon}
        onClick={(): void => setChecked(!checked)}
        checked={checked}
      />

      {props.icon && <StyledIcon background={props.icon} />}
      {props.icon && <StyledSpan />}

      <StyledName color={props.color}>{props.name}</StyledName>
    </div>
  )
}

export default FilterItem
