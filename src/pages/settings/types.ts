import { RouteComponentProps } from 'react-router-dom'
import { Profile } from 'src/types/react-redux-firebase'

export interface OwnProps {}

export interface StateProps {
  isLoggedIn: boolean
  profile: Profile
}

export type Props = OwnProps & StateProps & RouteComponentProps

export interface StyledContainerProps {
  focus: boolean
}
