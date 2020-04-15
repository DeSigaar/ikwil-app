import * as React from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { withRouter } from 'react-router-dom'
import TopBarWave from 'src/assets/general/top_bar_wave.svg'
import { RootState, store } from 'src/redux/store'
import {
  IconContainer,
  LogIn as LogInIcon,
  LogOut as LogOutIcon,
  SoftwareDownload as SoftwareDownloadIcon,
  Options as OptionsIcon,
} from 'src/icons'
import { fireAuth } from 'src/utils/firebase'
import { AppActionsTypes, askForInstall } from 'src/redux/app'
import { Backbutton } from 'src/components'
import Dropdown from './dropdown'
import {
  StyledContainer,
  StyledLeft,
  StyledTitle,
  StyledIconContainer,
  StyledMoreIcon,
  StyledDropdownItem,
} from './styles'
import { Props, OwnProps, StateProps } from './types'

const Header: React.FC<Props> = (props: Props) => {
  const [open, setOpen] = React.useState(false) // Dropdown state

  return (
    <>
      <Helmet title={props.title} />

      <StyledContainer background={TopBarWave}>
        <StyledLeft>
          <StyledTitle>{props.title}</StyledTitle>
        </StyledLeft>

        <StyledIconContainer onClick={(): void => setOpen(!open)}>
          <StyledMoreIcon />

          <Dropdown closeDropdown={setOpen} open={open}>
            {/* If install prompt is set, show install app dropdown item */}
            {props.isInstallPromptSet &&
            !window.matchMedia('(display-mode: standalone)').matches ? (
              <StyledDropdownItem
                onClick={(): AppActionsTypes => store.dispatch(askForInstall())}
              >
                Installeer de app
                <IconContainer>
                  <SoftwareDownloadIcon />
                </IconContainer>
              </StyledDropdownItem>
            ) : null}
            {/* If logged in, show the settings dropdown item */}
            {props.isLoggedIn && (
              <StyledDropdownItem
                onClick={(): void => props.history.push('/instellingen')}
              >
                Instellingen
                <IconContainer>
                  <OptionsIcon />
                </IconContainer>
              </StyledDropdownItem>
            )}
            <StyledDropdownItem
              onClick={(): void => {
                props.isLoggedIn
                  ? fireAuth.signOut()
                  : props.history.push('/login')
              }}
            >
              {props.isLoggedIn ? 'Uitloggen' : 'Inloggen'}
              <IconContainer>
                {props.isLoggedIn ? <LogOutIcon /> : <LogInIcon />}
              </IconContainer>
            </StyledDropdownItem>
          </Dropdown>
        </StyledIconContainer>
      </StyledContainer>
      {!props.isHome && <Backbutton />}
    </>
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

export default withRouter(connect(mapStateToProps)(Header))
