import * as React from 'react'
import styled from 'styled-components'
import { Header, Icon } from 'src/components'
import NameIcon from 'src/assets/general/icon_settings_name.svg'
import MailIcon from 'src/assets/general/icon_settings_mail.svg'
import PhoneIcon from 'src/assets/general/icon_settings_phone.svg'
import HelpIcon from 'src/assets/general/icon_settings_help.svg'
import GlobeIcon from 'src/assets/general/icon_settings_globe.svg'
import { layout, colors } from 'src/styles'

interface StyledProps {
  focus: boolean
}

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
  padding: 0px 15px;
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

const StyledToggle = styled.label`
  position: relative;
  display: inline-block;
  align-self: flex-start;
  width: 50px;
  height: 28px;

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${colors.colors.lightgrey};
    transition: 0.2s;
    border-radius: 34px;

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
  margin: 3px 0 0 47px;
  position: absolute;
`

const StyledBottomLabel = styled.div`
  color: ${colors.colors.orange};
  display: flex;
  margin-bottom: 10px;

  p {
    margin-left: 5px;
  }
`

const Settings: React.FC = () => {
  const [focused, setFocused] = React.useState(false)
  let inputElement: any // eslint-disable-line @typescript-eslint/no-explicit-any

  return (
    <>
      <Header title="Instellingen" />
      <StyledWrapper>
        <StyledTitle>Account</StyledTitle>
        <StyledContainer focus={focused}>
          <Icon
            icon={NameIcon}
            onClick={(): void => inputElement.focus()}
            size={24}
            cursor="pointer"
          />
          <StyledInput
            type="search"
            placeholder="Voornaam"
            ref={(input): void => {
              inputElement = input
            }}
            onFocus={(): void => setFocused(true)}
            onBlur={(): void => setFocused(false)}
          />
        </StyledContainer>
        <StyledContainer focus={focused}>
          <Icon
            icon={NameIcon}
            onClick={(): void => inputElement.focus()}
            size={24}
            cursor="pointer"
          />
          <StyledInput
            type="search"
            placeholder="Achternaam"
            ref={(input): void => {
              inputElement = input
            }}
            onFocus={(): void => setFocused(true)}
            onBlur={(): void => setFocused(false)}
          />
        </StyledContainer>
        <StyledContainer focus={focused}>
          <Icon
            icon={MailIcon}
            onClick={(): void => inputElement.focus()}
            size={24}
            cursor="pointer"
          />
          <StyledInput
            type="search"
            placeholder="Emailadres"
            ref={(input): void => {
              inputElement = input
            }}
            onFocus={(): void => setFocused(true)}
            onBlur={(): void => setFocused(false)}
          />
        </StyledContainer>
        <StyledContainer focus={focused}>
          <Icon
            icon={PhoneIcon}
            onClick={(): void => inputElement.focus()}
            size={24}
            cursor="pointer"
          />
          <StyledInput
            type="search"
            placeholder="Phone"
            ref={(input): void => {
              inputElement = input
            }}
            onFocus={(): void => setFocused(true)}
            onBlur={(): void => setFocused(false)}
          />
        </StyledContainer>
        <StyledButton>Wijzigingen opslaan</StyledButton>
        <StyledHorizontalRule />
        <StyledTitle>App-instellingen</StyledTitle>
        <StyledToggle>
          <StyledCheckbox type="checkbox"></StyledCheckbox>
          <span className="slider"></span>
          <StyledToggleLabel>Notificaties</StyledToggleLabel>
        </StyledToggle>
        <StyledHorizontalRule />
        <StyledBottomLabel>
          <Icon icon={HelpIcon} size={20} />
          <p>Help & ondersteuning</p>
        </StyledBottomLabel>
        <StyledBottomLabel>
          <Icon icon={GlobeIcon} size={20} />
          <p>Algemene voorwaarden & Privacy</p>
        </StyledBottomLabel>
      </StyledWrapper>
    </>
  )
}

export default Settings
