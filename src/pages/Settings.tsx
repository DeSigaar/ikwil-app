import * as React from 'react'
import styled from 'styled-components'
import { Header, Icon } from 'src/components'
import { Link, RouteComponentProps } from 'react-router-dom'
import NameIcon from 'src/assets/general/icon_settings_name.svg'
import MailIcon from 'src/assets/general/icon_settings_mail.svg'
import PhoneIcon from 'src/assets/general/icon_settings_phone.svg'
import HelpIcon from 'src/assets/general/icon_settings_help.svg'
import GlobeIcon from 'src/assets/general/icon_settings_globe.svg'
import PrivacyIcon from 'src/assets/general/icon_settings_privacy.svg'
import { layout, colors } from 'src/styles'
import { connect } from 'react-redux'
import { RootState } from 'src/redux/store'
import { fireStore } from 'src/utils/firebase'

interface StyledProps {
  focus: boolean
}

interface OwnProps {}

interface StateProps {
  isLoggedIn: boolean
  profile: any
}

type Props = OwnProps & StateProps & RouteComponentProps
const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
  padding: 0px 15px;
  max-width: 400px;
  margin: auto;

  a {
    text-decoration: none;
  }
`

const StyledTitle = styled.h2`
  color: ${colors.colors.darkgrey};
  font-size: 16px;
  margin-bottom: 20px;
  align-self: flex-start;
`

const StyledContainer = styled.div<StyledProps>`
  position: relative;
  height: 48px;
  width: 100%;
  border-radius: 99999px;
  box-shadow: ${colors.shadows.input};
  background: ${colors.colors.white};
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;

  > div {
    z-index: 1;
    transition: all 0.2s ease-in-out;
    opacity: ${(props): number => (props.focus ? 0.75 : 0.25)};
  }

  > div:last-of-type {
    padding: 24px;
    opacity: 1;
  }
`

const StyledInput = styled.input`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  flex-grow: 1;
  background: none;
  border: none;
  border-radius: 99999px;
  outline: none;
  padding: 0 ${layout.unit * 3}px;
  font-size: 16px;
  color: ${colors.colors.black};
  transition: all 0.2s ease-in-out;

  &:focus {
    box-shadow: inset ${colors.shadows.default};
  }

  &::placeholder {
    color: ${colors.colors.black};
    opacity: 0.5;
  }
`

const StyledButton = styled.button`
  background: ${colors.colors.orange};
  color: ${colors.colors.white};
  text-decoration: none;
  border: none;
  border-radius: 9999px;
  width: 190px;
  height: 30px;
  font-size: 16px;
  font-weight: bold;
  margin: 15px 0px;
`

const StyledHorizontalRule = styled.hr`
  background-color: #d3d3d3;
  border: none;
  height: 1px;
  margin: 15px 0 25px;
  width: 100%;
`

const StyledToggleContainer = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const StyledToggle = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 28px;

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: ${colors.colors.lightgrey};
    transition: 0.2s;
    border-radius: 34px;
    width: 50px;

    &::before {
      position: absolute;
      content: '';
      height: 21px;
      width: 21px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      transition: 0.2s;
      border-radius: 50%;
    }
  }
`

const StyledCheckbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  border-radius: 9999px;

  &:checked + .slider {
    background-color: ${colors.colors.orange};
  }

  &:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  &:checked + .slider:before {
    transform: translateX(21px);
  }
`
const StyledToggleLabel = styled.span`
  color: ${colors.colors.darkgrey};
  margin: 3px 0 0 0px;

  a {
    text-decoration: none;
  }
`

const StyledBottomLabel = styled.div`
  color: ${colors.colors.orange};
  display: flex;
  margin-bottom: 10px;

  p {
    margin-left: 5px;
  }
`

const Settings: React.FC<Props> = (props: Props) => {
  const [focused1, setFocused1] = React.useState(false)
  const [focused2, setFocused2] = React.useState(false)
  const [focused3, setFocused3] = React.useState(false)
  const [name, setName] = React.useState(props.profile.displayName)
  const [email, setEmail] = React.useState(props.profile.email)
  const [phone, setPhone] = React.useState(props.profile.phone)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === 'name') setName(event.target.value)
    else if (event.target.name === 'email') setEmail(event.target.value)
    else if (event.target.name === 'phone') setPhone(event.target.value)
  }

  const saveSettings = (): void => {
    // Save naar firebase
    fireStore.collection('users').doc(props.profile.id).update({
      displayName: name,
      email,
      phone,
    })
  }

  let inputElement1: any
  let inputElement2: any
  let inputElement3: any

  React.useEffect(() => {
    if (!props.isLoggedIn) props.history.push('/login')
  }, [props.isLoggedIn, props.history])

  return (
    <>
      <Header title="Instellingen" />
      <StyledWrapper>
        <StyledTitle>Account</StyledTitle>
        <StyledContainer focus={focused1}>
          <Icon
            icon={NameIcon}
            onClick={(): void => inputElement1.focus()}
            size={24}
            cursor="pointer"
          />
          <StyledInput
            type="text"
            name="name"
            placeholder="Naam"
            value={name}
            ref={(input): void => {
              inputElement1 = input
            }}
            onFocus={(): void => setFocused1(true)}
            onBlur={(): void => setFocused1(false)}
            onChange={handleChange}
          />
        </StyledContainer>
        <StyledContainer focus={focused2}>
          <Icon
            icon={MailIcon}
            onClick={(): void => inputElement2.focus()}
            size={24}
            cursor="pointer"
          />
          <StyledInput
            type="email"
            name="email"
            placeholder="Emailadres"
            ref={(input): void => {
              inputElement2 = input
            }}
            onFocus={(): void => setFocused2(true)}
            onBlur={(): void => setFocused2(false)}
            value={email}
            onChange={handleChange}
          />
        </StyledContainer>
        <StyledContainer focus={focused3}>
          <Icon
            icon={PhoneIcon}
            onClick={(): void => inputElement3.focus()}
            size={24}
            cursor="pointer"
          />
          <StyledInput
            type="tel"
            name="phone"
            value={phone}
            placeholder="Phone"
            ref={(input): void => {
              inputElement3 = input
            }}
            onFocus={(): void => setFocused3(true)}
            onBlur={(): void => setFocused3(false)}
            onChange={handleChange}
          />
        </StyledContainer>
        <StyledButton onClick={saveSettings}>Wijzigingen opslaan</StyledButton>
        <StyledHorizontalRule />
        <StyledTitle>App-instellingen</StyledTitle>
        <StyledToggleContainer>
          <StyledToggleLabel>Notificaties</StyledToggleLabel>
          <StyledToggle>
            <StyledCheckbox type="checkbox"></StyledCheckbox>
            <span className="slider"></span>
          </StyledToggle>
        </StyledToggleContainer>
        <StyledHorizontalRule />
        <Link to="/help">
          <StyledBottomLabel>
            <Icon icon={HelpIcon} size={20} />
            <p>Help & ondersteuning</p>
          </StyledBottomLabel>
        </Link>
        <Link to="/terms-of-service">
          <StyledBottomLabel>
            <Icon icon={GlobeIcon} size={20} />
            <p>Terms of Service</p>
          </StyledBottomLabel>
        </Link>
        <Link to="/login">
          <StyledBottomLabel>
            <Icon icon={PrivacyIcon} size={20} />
            <p>Privacy</p>
          </StyledBottomLabel>
        </Link>
      </StyledWrapper>
    </>
  )
}

const mapStateToProps = (state: RootState, ownProps: OwnProps): StateProps => {
  return {
    ...ownProps,
    profile: state.firebase.profile,
    isLoggedIn: !state.firebase.auth.isEmpty,
  }
}

export default connect(mapStateToProps, null)(Settings)
