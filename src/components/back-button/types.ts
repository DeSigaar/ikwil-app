import { RouteComponentProps } from 'react-router-dom'

export interface OwnProps {}

export interface StateProps {
  isHome?: boolean
  isLoggedIn?: boolean
  isInstallPromptSet?: boolean
}

export type Props = StateProps & OwnProps & RouteComponentProps
