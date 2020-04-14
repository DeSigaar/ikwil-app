import * as React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { RootState } from 'src/redux/store'
import BackArrowIcon from 'src/assets/general/icon_back_orange.svg'
import { Icon } from 'src/components'
import { StyledContainer, StyledText } from './styles'
import { Props, OwnProps, StateProps } from './types'

const Backbutton: React.FC<Props> = (props: Props) => {
  return (
    <StyledContainer onClick={(): void => props.history.push('/')}>
      <Icon icon={BackArrowIcon} size={16} cursor="pointer" />
      <StyledText>Terug</StyledText>
    </StyledContainer>
  )
}

const mapStateToProps = (state: RootState, ownProps: OwnProps): StateProps => {
  return {
    ...ownProps,
    isHome: state.router.location.pathname === '/',
    isLoggedIn: !state.firebase.auth.isEmpty,
    isInstallPromptSet: !!state.app.installPrompt,
  }
}

export default withRouter(connect(mapStateToProps)(Backbutton))
