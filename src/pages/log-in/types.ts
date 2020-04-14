import { RouteComponentProps } from 'react-router'

export interface OwnProps {}

export interface StateProps {
  isLoggedIn: boolean
}

export type Props = OwnProps & StateProps & RouteComponentProps
