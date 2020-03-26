import * as React from 'react'
import styled from 'styled-components'
import { colors } from '../utils/styles/colors'
import FilterItem from './FilterItem'
import BewegingIcon from '../assets/activity_type/activity_type_beweging.svg'
import CreatiefIcon from '../assets/activity_type/activity_type_creatief.svg'
import KinderenIcon from '../assets/activity_type/activity_type_kinderen.svg'
import SociaalIcon from '../assets/activity_type/activity_type_sociaal.svg'
import SpiritueelIcon from '../assets/activity_type/activity_type_spiritueel.svg'
import TaalIcon from '../assets/activity_type/activity_type_taal.svg'

interface Props {}

const StyledHorizontalRule = styled.hr`
  background-color: #d3d3d3;
  border: none;
  height: 1px;
  margin-bottom: 30px;
`

const Filter: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <FilterItem icon={BewegingIcon} name="Beweging" color={colors.blue} />
      <FilterItem icon={CreatiefIcon} name="Creatief" color={colors.red} />
      <FilterItem icon={KinderenIcon} name="Kinderen" color={colors.purple} />
      <FilterItem icon={SociaalIcon} name="Sociaal" color={colors.pink} />
      <FilterItem
        icon={SpiritueelIcon}
        name="Spiritueel"
        color={colors.yellow}
      />
      <FilterItem icon={TaalIcon} name="Taal" color={colors.green} />
      <StyledHorizontalRule />
      <FilterItem name="Mijn activiteiten" color={colors.lightgrey} />
      <FilterItem name="Speciale activiteiten" color={colors.lightgrey} />
    </div>
  )
}

export default Filter
