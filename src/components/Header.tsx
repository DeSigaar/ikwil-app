import * as React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import TopBarWave from 'src/assets/general/top_bar_wave.svg'
import { layout, colors } from 'src/styles'
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

interface OwnProps {
  title: string
}

interface StateProps {
  isHome?: boolean
  isLoggedIn?: boolean
  isInstallPromptSet?: boolean
}

type Props = StateProps & OwnProps & RouteComponentProps

interface BackgroundProps {
  readonly background: string
}

const Container = styled.div<BackgroundProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${layout.sizes.headerHeight + 1}px;
  background: ${colors.colors.orange};
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${layout.unit * 1.5}px ${layout.unit}px ${layout.unit * 2}px;

  &::after {
    content: '';
    position: absolute;
    left: -2px;
    right: -2px;
    top: ${layout.sizes.headerHeight}px;
    width: calc(100% + 4px);
    height: calc(100vh - ${layout.sizes.headerHeight}px);
    z-index: -1;
    background-image: url(${(props): string => props.background});
    background-repeat: no-repeat;
    background-position: top center;
    pointer-events: none;
  }
`

const StyledLeft = styled.div`
  display: flex;
  align-items: center;

  color: ${colors.colors.white};
  transition: all 0.2s ease-in-out;

  > * {
    margin-left: 10px;
  }
  > *:first-child {
    margin-left: 0;
  }

  > div {
    margin-left: 0;
    cursor: pointer;

    &:hover,
    &:active {
      color: ${colors.colors.hoverWhite};
    }
  }
`

const Title = styled.h1`
  font-size: 28px;
  color: ${colors.colors.white};
`

const StyledIconContainer = styled.div`
  width: 26px;
  height: 26px;
  padding: 2px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  color: ${colors.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover,
  &:active {
    color: ${colors.colors.hoverWhite};
  }
`

const StyledMoreIcon = styled.div`
  box-sizing: border-box;
  position: relative;
  display: block;
  width: 4px;
  height: 4px;
  background: currentColor;
  border-radius: 100%;
  transform: scale(1.2);
  &::after,
  &::before {
    content: '';
    position: absolute;
    box-sizing: border-box;
    display: block;
    width: 4px;
    height: 4px;
    background: currentColor;
    border-radius: 100%;
  }
  &::after {
    left: 0;
    top: 6px;
  }
  &::before {
    top: -6px;
    right: 0;
  }
  &:hover,
  &:active {
    color: ${colors.colors.hoverWhite};
  }
`

interface DropdownProps {
  open: boolean
}

const StyledDropdown = styled.div<DropdownProps>`
  cursor: auto;
  position: fixed;
  right: 15px;
  top: 55px;
  background: ${colors.colors.white};
  color: ${colors.colors.black};
  opacity: ${(props): number => (props.open ? 1 : 0)};
  pointer-events: ${(props): string => (props.open ? 'all' : 'none')};
  transition: all 0.2s ease-in-out;
  border-radius: 5px;
  box-shadow: ${colors.shadows.default};

  &:before {
    content: '';
    position: absolute;
    top: -4px;
    right: 22px;
    width: 12px;
    height: 12px;
    background: ${colors.colors.white};
    box-shadow: ${colors.shadows.default};
    transform: rotate(45deg);
  }
`

const StyledDropdownItem = styled.div`
  --ggs: 0.9;

  cursor: pointer;
  position: relative;
  font-size: 14px;
  color: ${colors.colors.black};
  padding: ${layout.unit * 0.65}px ${layout.unit}px;
  background: ${colors.colors.white};
  transition: all 0.2s ease-in-out;
  min-width: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover,
  &:active {
    background: ${colors.colors.hoverWhite};
  }

  &:first-of-type {
    border-top-left-radius: ${layout.borderRadius}px;
    border-top-right-radius: ${layout.borderRadius}px;
  }
  &:last-of-type {
    border-bottom-right-radius: ${layout.borderRadius}px;
    border-bottom-left-radius: ${layout.borderRadius}px;
  }

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -0.5px;
    width: 85%;
    margin: 0 7.5%;
    border-bottom: 1px solid ${colors.colors.black};
    opacity: 0.2;
    z-index: 1;
  }
  &:last-of-type:after {
    border-bottom: none;
  }

  > div {
    margin-left: 25px;
    color: ${colors.colors.black};
    opacity: 0.75;
  }
`

const Header: React.FC<Props> = (props: Props) => {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <Helmet title={props.title} />
      <Container background={TopBarWave}>
        <StyledLeft>
          <Title>{props.title}</Title>
        </StyledLeft>

        <StyledIconContainer onClick={(): void => setOpen(!open)}>
          <StyledMoreIcon />

          <StyledDropdown open={open}>
            {props.isInstallPromptSet && (
              <StyledDropdownItem
                onClick={(): AppActionsTypes => store.dispatch(askForInstall())}
              >
                Installeer de app
                <IconContainer>
                  <SoftwareDownloadIcon />
                </IconContainer>
              </StyledDropdownItem>
            )}
            <StyledDropdownItem
              onClick={(): void => props.history.push('/instellingen')}
            >
              Instellingen
              <IconContainer>
                <OptionsIcon />
              </IconContainer>
            </StyledDropdownItem>
            <StyledDropdownItem
              onClick={(): void => {
                props.isLoggedIn
                  ? fireAuth.signOut()
                  : props.history.push('/login')
              }}
            >
              {props.isLoggedIn ? 'Uitloggen' : 'Inloggen'}
              {props.isLoggedIn ? (
                <IconContainer>
                  <LogOutIcon />
                </IconContainer>
              ) : (
                <IconContainer>
                  <LogInIcon />
                </IconContainer>
              )}
            </StyledDropdownItem>
          </StyledDropdown>
        </StyledIconContainer>
      </Container>
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

export default withRouter(connect(mapStateToProps, null)(Header))
