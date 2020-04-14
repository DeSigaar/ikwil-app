import { FilterActionsTypes } from 'src/redux/filter'

export interface OwnProps {}

export interface StateProps {
  beweging: boolean
  creatief: boolean
  kinderen: boolean
  sociaal: boolean
  spiritueel: boolean
  taal: boolean
  mijn: boolean
  speciaal: boolean
}

export interface DispatchProps {
  changeFilter: (filterName: string, value: boolean) => FilterActionsTypes
}

export type Props = OwnProps & StateProps & DispatchProps
