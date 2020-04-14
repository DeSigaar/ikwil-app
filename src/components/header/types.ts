import { RouteComponentProps } from 'react-router-dom'

export interface OwnProps {
  title: string
}

export interface StateProps {
  isHome?: boolean
  isLoggedIn?: boolean
  isInstallPromptSet?: boolean
}

export type Props = StateProps & OwnProps & RouteComponentProps

export interface StyledBackgroundProps {
  readonly background: string
}
