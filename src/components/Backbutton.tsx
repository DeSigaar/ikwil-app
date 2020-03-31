import * as React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { RootState } from 'src/redux/store'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import BackArrowIcon from 'src/assets/general/icon_back_orange.svg'
import { colors } from 'src/styles'

interface OwnProps {}

interface StateProps {
  isHome?: boolean
  isLoggedIn?: boolean
  isInstallPromptSet?: boolean
}

type Props = StateProps & OwnProps & RouteComponentProps

interface BackgroundProps {
  readonly background: string
}

const StyledContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
`

const StyledBackgroundIcon = styled.div<BackgroundProps>`
  width: 15px;
  height: 15px;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${(props): string => props.background});
`

const StyledBackText = styled.p`
  font-size: 16px;
  margin: -2px 0px 0px 5px;
  color: ${colors.colors.orange};
`

const Backbutton: React.FC<Props> = (props: Props) => {
  return (
    <StyledContainer onClick={(): void => props.history.push('/')}>
      <StyledBackgroundIcon background={BackArrowIcon} />
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
