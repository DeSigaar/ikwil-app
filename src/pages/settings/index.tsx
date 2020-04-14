import * as React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Header, BackgroundLogo, Icon } from 'src/components'
import NameIcon from 'src/assets/general/icon_settings_name.svg'
import MailIcon from 'src/assets/general/icon_settings_mail.svg'
import PhoneIcon from 'src/assets/general/icon_settings_phone.svg'
// import HelpIcon from 'src/assets/general/icon_settings_help.svg'
import GlobeIcon from 'src/assets/general/icon_settings_globe.svg'
import PrivacyIcon from 'src/assets/general/icon_settings_privacy.svg'
import { RootState } from 'src/redux/store'
import { fireStore } from 'src/utils/firebase'
import { Props, OwnProps, StateProps } from './types'
import {
  StyledWrapper,
  StyledTitle,
  StyledContainer,
  StyledInput,
  StyledButton,
  StyledHorizontalRule,
  StyledToggleContainer,
  StyledToggleLabel,
  StyledToggle,
  StyledCheckbox,
  StyledBottomLabel,
} from './styles'

const Settings: React.FC<Props> = (props: Props) => {
  const [focused1, setFocused1] = React.useState(false)
  const [focused2, setFocused2] = React.useState(false)
  const [focused3, setFocused3] = React.useState(false)
  const [name, setName] = React.useState(props.profile.displayName || '')
  const [email, setEmail] = React.useState(props.profile.email || '')
  const [phone, setPhone] = React.useState(props.profile.phoneNumber || '')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === 'name') setName(event.target.value)
    else if (event.target.name === 'email') setEmail(event.target.value)
    else if (event.target.name === 'phone') setPhone(event.target.value)
  }

  const saveSettings = (): void => {
    // Save settings to firestore
    fireStore.collection('users').doc(props.profile.id).update({
      displayName: name,
      email,
      phone,
    })
  }

  let inputElement1: HTMLInputElement | null
  let inputElement2: HTMLInputElement | null
  let inputElement3: HTMLInputElement | null

  React.useEffect(() => {
    // If person is not logged in, redirect to log in
    if (!props.isLoggedIn) props.history.push('/login')
  }, [props.isLoggedIn, props.history])

  return (
    <>
      <Header title="Instellingen" />
      <BackgroundLogo />

      <StyledWrapper>
        <StyledTitle>Account</StyledTitle>
        <StyledContainer focus={focused1}>
          <Icon
            icon={NameIcon}
            onClick={(): void => inputElement1?.focus()}
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
            onClick={(): void => inputElement2?.focus()}
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
            onClick={(): void => inputElement3?.focus()}
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
            <StyledCheckbox type="checkbox" />
            <span className="slider"></span>
          </StyledToggle>
        </StyledToggleContainer>
        <StyledHorizontalRule />
        {/* <Link to="/help">
          <StyledBottomLabel>
            <Icon icon={HelpIcon} size={20} />
            <p>Help & ondersteuning</p>
          </StyledBottomLabel>
        </Link> */}
        <Link to="/terms-of-service">
          <StyledBottomLabel>
            <Icon icon={GlobeIcon} size={20} />
            <p>Terms of Service</p>
          </StyledBottomLabel>
        </Link>
        <Link to="/privacy">
          <StyledBottomLabel>
            <Icon icon={PrivacyIcon} size={20} />
            <p>Privacy Policy</p>
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

export default connect(mapStateToProps)(Settings)
