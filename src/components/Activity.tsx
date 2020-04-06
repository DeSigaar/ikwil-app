import * as React from 'react'

import styled from 'styled-components'
import { colors, layout, fonts } from 'src/styles'
import ChevronGrey from 'src/assets/general/chevron_grey.svg'
import ChevronWhite from 'src/assets/general/chevron_white.svg'
import Icon from './Icon'
import {
  BewegingIcon,
  CreatiefIcon,
  KinderenIcon,
  SociaalIcon,
  SpiritueelIcon,
  TaalIcon,
  BewegingInvertedIcon,
  CreatiefInvertedIcon,
  KinderenInvertedIcon,
  SociaalInvertedIcon,
  SpiritueelInvertedIcon,
  TaalInvertedIcon,
} from 'src/assets/activity_type'
import {
  CartIcon,
  LocationIcon,
  ParticipantsIcon,
  TimeIcon,
} from 'src/assets/activity_details'

import { Organiser, Activity as ActivityInterface } from 'src/types/database'

const ActivityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 10px;
  margin-top: 10px;
`

const ActivityItem = styled.div<ActivityStyleProps>`
  width: 75%;
  max-height: ${({ toggle }) => (toggle ? '350px' : '85px')};
  min-height: ${({ toggle }) => (toggle ? '200px' : '40px')};
  transition: 0.2s;
  box-shadow: ${colors.shadows.default};
  display: flex;
  align-items: flex-start;
  justify-items: center;
  flex-direction: column;
  background-color: ${({ backgroundColor, inverted }): string =>
    inverted ? backgroundColor : 'white'};
  border-radius: ${layout.borderRadius}px;
  color: ${({ inverted }): string =>
    inverted ? 'white' : colors.colors.darkgrey};
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: ${fonts.size.normal};
  font-weight: ${fonts.fontWeights.bold};
  padding: 5px;
`
const ActivityBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const LogoAndTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 80%;
  span {
    margin-left: ${layout.isSmallScreen ? '5' : '10'}px;
    max-width: 75%;
    padding: 5px;
  }
`
const Toggle = styled.button<ToggleStyleProps>`
  width: 40px;
  height: 40px;
  border: 0;
  padding: 0;

  background: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: ${({ toggle }): any => toggle && 'rotate(180deg)'};
  transition: 0.3s;

  &:focus {
    outline: unset;
  }
`
const Details = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: unset;
  font-size: ${fonts.size.small};
  font-weight: ${fonts.fontWeights.normal};
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding-left: 35px;
`
const Detail = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin: 3px 0;

  span {
    margin-left: 10px;
    max-width: 70%;
  }
`
const DetailIcon = styled.img<DetailStyleProps>`
  height: ${(props): number => props.size}px;
  width: ${(props): number => props.size}px;
  margin-right: 5px;
`
const Line = styled.hr`
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  border-width: 1px;
  opacity: 0.6;
  width: 90%;
  border-style: solid;
`
const Meedoen = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  font-size: ${fonts.size.normal}px;
  font-weight: ${fonts.fontWeights.normal};

  span {
    text-align: center;
  }
`
const Buttons = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  margin: 10px;
`

const ActivityButton = styled.button<ActiveStyleProps>`
  border: 0;
  margin: 0 2px;
  padding: 3px 9px;
  min-width: 60px;
  height: 25px;
  color: ${({ backgroundColor }): string => backgroundColor};
  background: unset;
  background-color: white;
  /* background-color: ${({ backgroundColor }): string => backgroundColor}; */
  font-weight: ${fonts.fontWeights.bold};
  border-radius: ${layout.borderRadiusBig}px;
  font-size: ${layout.isSmallScreen ? fonts.size.small : fonts.size.normal}px;
`

interface ToggleStyleProps {
  toggle: boolean
}
interface ActiveStyleProps {
  yes?: boolean
  maybe?: boolean
  no?: boolean
  backgroundColor: string
}
interface ActivityStyleProps {
  toggle: boolean
  inverted: boolean
  backgroundColor: string
}

interface DetailStyleProps {
  size: number
}
interface Props extends ActivityInterface {
  organisers: string[]
  allOrganisers: Organiser[]
  categoryName: string
  categoryColor: string
}

const Activity: React.FC<Props> = (props: Props) => {
  const [toggle, setToggle] = React.useState(false)
  const [inverted, setInverted] = React.useState(false)
  const [aanmeldingen] = React.useState([])

  // const [yes, setYes] = React.useState(false)
  // const [maybe, setMaybe] = React.useState(false)
  // const [no, setNo] = React.useState(false)

  const activityIconSize = 36
  const detailIconSize = 17

  let organiserName = ''
  React.useEffect(() => {
    console.log(props)
  })

  const activityIcon = (name: string, inverted: boolean) => {
    switch (name) {
      case 'Taal':
        return !inverted ? (
          <Icon icon={TaalIcon} size={activityIconSize} />
        ) : (
          <Icon icon={TaalInvertedIcon} size={activityIconSize} />
        )
      case 'Spiritueel':
        return !inverted ? (
          <Icon icon={SpiritueelIcon} size={activityIconSize} />
        ) : (
          <Icon icon={SpiritueelInvertedIcon} size={activityIconSize} />
        )
      case 'Beweging':
        return !inverted ? (
          <Icon icon={BewegingIcon} size={activityIconSize} />
        ) : (
          <Icon icon={BewegingInvertedIcon} size={activityIconSize} />
        )
      case 'Kinderen':
        return !inverted ? (
          <Icon icon={KinderenIcon} size={activityIconSize} />
        ) : (
          <Icon icon={KinderenInvertedIcon} size={activityIconSize} />
        )
      case 'Sociaal':
        return !inverted ? (
          <Icon icon={SociaalIcon} size={activityIconSize} />
        ) : (
          <Icon icon={SociaalInvertedIcon} size={activityIconSize} />
        )
      case 'Creatief':
        return !inverted ? (
          <Icon icon={CreatiefIcon} size={activityIconSize} />
        ) : (
          <Icon icon={CreatiefInvertedIcon} size={activityIconSize} />
        )

      default:
        return <span>none</span>
    }
  }

  const toggleActivity = (): void => {
    setInverted(!inverted)
    setToggle(!toggle)
  }

  return (
    <ActivityContainer>
      <ActivityItem
        toggle={toggle}
        backgroundColor={props.categoryColor}
        inverted={inverted}
      >
        <ActivityBar>
          {/* <span> |{props.categoryName}| </span> */}
          <LogoAndTitle>
            {activityIcon(props.categoryName, inverted)}
            <span>{props.name}</span>
          </LogoAndTitle>

          <Toggle toggle={toggle} onClick={(): void => toggleActivity()}>
            <img
              width="20px"
              height="20px"
              src={inverted ? ChevronWhite : ChevronGrey}
              alt=""
            />
          </Toggle>
        </ActivityBar>

        {toggle && (
          <>
            <Details>
              <Detail>
                <DetailIcon src={TimeIcon} size={detailIconSize} alt="" />{' '}
                {/* <span> {props.room}</span> */}
              </Detail>
              <Detail>
                <DetailIcon src={CartIcon} size={detailIconSize} alt="" />
                {props.allOrganisers.map((organisers) => {
                  props.organisers.map((organiser: string) => {
                    organisers.id === organiser
                      ? (organiserName = organisers.name)
                      : (organiserName = '-')
                  })
                })}
                <span>{organiserName}</span>
              </Detail>
              <Detail>
                <DetailIcon src={LocationIcon} size={detailIconSize} alt="" />
                <span>{props.room} </span>
              </Detail>
              <Detail>
                <DetailIcon
                  src={ParticipantsIcon}
                  size={detailIconSize}
                  alt=""
                />
                <span>{aanmeldingen.length} </span>
              </Detail>
            </Details>
            <Line />
            <Meedoen>
              <span>Meedoen met {props.name}?</span>
              <Buttons>
                <ActivityButton backgroundColor={props.categoryColor}>
                  Ja
                </ActivityButton>
                <ActivityButton backgroundColor={props.categoryColor}>
                  Misschien
                </ActivityButton>
                <ActivityButton backgroundColor={props.categoryColor}>
                  Nee
                </ActivityButton>
              </Buttons>
            </Meedoen>
          </>
        )}
      </ActivityItem>
    </ActivityContainer>
  )
}

export default Activity
