import * as React from 'react'
import * as Redux from 'redux'
import { colors } from 'src/styles'
import { changeFilter, FilterActionsTypes } from 'src/redux/filter'
import { connect } from 'react-redux'
import { RootState } from 'src/redux/store'
import { FilterItem } from 'src/components'
import {
  BewegingIcon,
  CreatiefIcon,
  KinderenIcon,
  SociaalIcon,
  SpiritueelIcon,
  TaalIcon,
} from 'src/assets/activity_type'
import { StyledContainer, StyledHorizontalRule } from './styles'
import { OwnProps, StateProps, DispatchProps, Props } from './types'

const Filter: React.FC<Props> = (props: Props) => {
  return (
    <StyledContainer>
      <FilterItem
        icon={BewegingIcon}
        name="Beweging"
        color={colors.colors.blue}
        filterName="beweging"
        checked={props.beweging}
        handleClick={props.changeFilter}
      />
      <FilterItem
        icon={CreatiefIcon}
        name="Creatief"
        color={colors.colors.red}
        filterName="creatief"
        checked={props.creatief}
        handleClick={props.changeFilter}
      />
      <FilterItem
        icon={KinderenIcon}
        name="Kinderen"
        color={colors.colors.purple}
        filterName="kinderen"
        checked={props.kinderen}
        handleClick={props.changeFilter}
      />
      <FilterItem
        icon={SociaalIcon}
        name="Sociaal"
        color={colors.colors.pink}
        filterName="sociaal"
        checked={props.sociaal}
        handleClick={props.changeFilter}
      />
      <FilterItem
        icon={SpiritueelIcon}
        name="Spiritueel"
        color={colors.colors.yellow}
        filterName="spiritueel"
        checked={props.spiritueel}
        handleClick={props.changeFilter}
      />
      <FilterItem
        icon={TaalIcon}
        name="Taal"
        color={colors.colors.green}
        filterName="taal"
        checked={props.taal}
        handleClick={props.changeFilter}
      />
      <StyledHorizontalRule />
      <FilterItem
        name="Mijn activiteiten"
        color={colors.colors.lightgrey}
        filterName="mijn"
        checked={props.mijn}
        handleClick={props.changeFilter}
      />
      <FilterItem
        name="Speciale activiteiten"
        color={colors.colors.lightgrey}
        filterName="speciaal"
        checked={props.speciaal}
        handleClick={props.changeFilter}
      />
    </StyledContainer>
  )
}

const mapStateToProps = (state: RootState, ownProps: OwnProps): StateProps => {
  return {
    ...ownProps,
    beweging: state.filter.beweging,
    creatief: state.filter.creatief,
    kinderen: state.filter.kinderen,
    sociaal: state.filter.sociaal,
    spiritueel: state.filter.spiritueel,
    taal: state.filter.taal,
    mijn: state.filter.mijn,
    speciaal: state.filter.speciaal,
  }
}

const mapDispatchToProps = (dispatch: Redux.Dispatch): DispatchProps => ({
  changeFilter: (filterName: string, value: boolean): FilterActionsTypes =>
    dispatch(changeFilter(filterName, value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
