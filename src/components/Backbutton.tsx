import * as React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { RootState } from 'src/redux/store'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import BackArrowIcon from 'src/assets/general/icon_back_orange.svg'
import { colors } from 'src/styles'
import { Icon } from 'src/components'

interface OwnProps {}

interface StateProps {
  isHome?: boolean
  isLoggedIn?: boolean
  isInstallPromptSet?: boolean
}

type Props = StateProps & OwnProps & RouteComponentProps

const StyledContainer = styled.div`
  display: inline-flex;
  align-items: center;
  margin-bottom: 10px;
`

const StyledBackText = styled.p`
  font-size: 16px;
  margin-left: 5px;
  color: ${colors.colors.orange};
`

const Backbutton: React.FC<Props> = (props: Props) => {
  return (
    <StyledContainer onClick={(): void => props.history.push('/')}>
      <Icon icon={BackArrowIcon} size={16} />
      <StyledBackText>Terug</StyledBackText>
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

export default withRouter(connect(mapStateToProps, null)(Backbutton))
