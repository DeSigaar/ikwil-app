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

const ActivityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  /* padding: 10px; */
  margin-right: 10px;
`

const ActivityItem = styled.div<ActivityStyleProps>`
  width: 75%;
  max-height: ${({ toggle }) => (toggle ? '300px' : '60px')};
  min-height: ${({ toggle }) => (toggle ? '200px' : '40px')};
  transition: 0.2s;
  box-shadow: ${colors.shadows.default};
  display: flex;
  align-items: flex-start;
  justify-items: center;
  flex-direction: column;
  background-color: ${({ backgroundColor, inverted }) =>
    inverted ? backgroundColor : 'white'};
  border-radius: ${layout.borderRadius}px;
  color: ${({ inverted }) => (inverted ? 'white' : colors.colors.darkgrey)};
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
    margin-left: 10px;
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
  transform: ${({ toggle }) => toggle && 'rotate(180deg)'};
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

  span {
    margin-left: 10px;
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
  width: 85%;
`
const Meedoen = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  font-size: ${fonts.size.small};
  font-weight: ${fonts.fontWeights.normal};
`
const Buttons = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  margin: 5px;
`

interface ToggleStyleProps {
  toggle: boolean
}
interface ActivityStyleProps {
  toggle: boolean
  inverted: boolean
  backgroundColor: string
}

interface DetailStyleProps {
  size: number
}
interface Props {
  name: string
  organisers: string[]
  repeats: boolean
  room: string
  categoryName: string
  categoryColor: string
  days: any //TODO any veranderen
}

const Activity: React.FC<Props> = (props: Props) => {
  const [toggle, setToggle] = React.useState(false)
  const [inverted, setInverted] = React.useState(false)

  const activityIconSize = 36
  const detailIconSize = 17

  // {
  //   console.log(props)
  //   console.log(toggle)
  // }

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
        break
      case 'Spiritueel':
        return !inverted ? (
          <Icon icon={SpiritueelIcon} size={activityIconSize} />
        ) : (
          <Icon icon={SpiritueelInvertedIcon} size={activityIconSize} />
        )
        break
      case 'Beweging':
        return !inverted ? (
          <Icon icon={BewegingIcon} size={activityIconSize} />
        ) : (
          <Icon icon={BewegingInvertedIcon} size={activityIconSize} />
        )
        break
      case 'Kinderen':
        return !inverted ? (
          <Icon icon={KinderenIcon} size={activityIconSize} />
        ) : (
          <Icon icon={KinderenInvertedIcon} size={activityIconSize} />
        )
        break
      case 'Sociaal':
        return !inverted ? (
          <Icon icon={SociaalIcon} size={activityIconSize} />
        ) : (
          <Icon icon={SociaalInvertedIcon} size={activityIconSize} />
        )
        break
      case 'Creatief':
        return !inverted ? (
          <Icon icon={CreatiefIcon} size={activityIconSize} />
        ) : (
          <Icon icon={CreatiefInvertedIcon} size={activityIconSize} />
        )
        break

      default:
        return <span>none</span>
        break
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
                <span> {props.room}</span>
              </Detail>
              <Detail>
                <DetailIcon src={CartIcon} size={detailIconSize} alt="" />
                <span>{props.room} </span>
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
                <span>{props.room} </span>
              </Detail>
            </Details>
            <Line />
            <Meedoen>
              <span>Meedoen met {props.name}?</span>
              <Buttons>
                <button>Ja</button>
                <button>Misschien</button>
                <button>Nee</button>
              </Buttons>
            </Meedoen>
          </>
        )}
      </ActivityItem>
    </ActivityContainer>
  )
}

export default Activity
