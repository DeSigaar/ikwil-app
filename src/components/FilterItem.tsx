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

const StyledContainer = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
`

const StyledIcon = styled.div<BackgroundProps>`
  background-image: url(${(props): string => props.background});
  background-position: center;
  background-repeat: no-repeat;
  display: inline-block;
  height: 27px;
  width: 27px;
  margin-right: 15px;
`

const StyledName = styled.h3`
  display: inline-block;
  margin-top: 2px;
  font-size: 16px;
  color: ${(props) => props.color};
`

const StyledCheckbox = styled.div<StyledProps>`
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-right: 15px;
  border: ${({ checked }) => (checked ? 'none' : '2px solid #d3d3d3')};
  background-color: ${({ checked }) => (checked ? 'orange' : 'white')};
  background-image: url(${(props): string => props.background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 18px 18px;
`

const FilterItem: React.FC<Props> = (props: Props) => {
  const [checked, setChecked] = React.useState(false)

  return (
    <StyledContainer>
      <StyledCheckbox
        background={TickIcon}
        onClick={(): void => setChecked(!checked)}
        checked={checked}
      />

      {props.icon && <StyledIcon background={props.icon} />}

      <StyledName color={props.color}>{props.name}</StyledName>
    </StyledContainer>
  )
}

export default FilterItem
