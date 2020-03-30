import * as React from 'react'
import styled from 'styled-components'
import { colors, layout } from 'src/styles'
import { FilterItem } from 'src/components'
import {
  BewegingIcon,
  CreatiefIcon,
  KinderenIcon,
  SociaalIcon,
  SpiritueelIcon,
  TaalIcon,
} from 'src/assets/activity_type'

const StyledHorizontalRule = styled.hr`
  background-color: #d3d3d3;
  border: none;
  height: 1px;
  margin: 15px 0;
`

const StyledContainer = styled.div`
  padding: 0 ${layout.unit}px;
`

const Filter: React.FC = () => {
  return (
    <StyledContainer>
      <FilterItem
        icon={BewegingIcon}
        name="Beweging"
        color={colors.colors.blue}
      />
      <FilterItem
        icon={CreatiefIcon}
        name="Creatief"
        color={colors.colors.red}
      />
      <FilterItem
        icon={KinderenIcon}
        name="Kinderen"
        color={colors.colors.purple}
      />
      <FilterItem
        icon={SociaalIcon}
        name="Sociaal"
        color={colors.colors.pink}
      />
      <FilterItem
        icon={SpiritueelIcon}
        name="Spiritueel"
        color={colors.colors.yellow}
      />
      <FilterItem icon={TaalIcon} name="Taal" color={colors.colors.green} />
      <StyledHorizontalRule />
      <FilterItem name="Mijn activiteiten" color={colors.colors.lightgrey} />
      <FilterItem
        name="Speciale activiteiten"
        color={colors.colors.lightgrey}
      />
    </StyledContainer>
  )
}

export default Filter
