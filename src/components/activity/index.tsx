import * as React from 'react'
import ChevronGrey from 'src/assets/general/chevron_grey.svg'
import ChevronWhite from 'src/assets/general/chevron_white.svg'
import Icon from '../Icon'
import {
  ActivityContainer,
  ActivityTimeline,
  ActivityItem,
  ActivityBar,
  LogoAndTitle,
  Toggle,
  Details,
  Detail,
  DetailIcon,
  Line,
  Meedoen,
  Buttons,
  ActivityButton,
} from './styles'
import Timeline from './timeline'
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

interface Props extends ActivityInterface {
  organisers: string[]
  allOrganisers: Organiser[]
  categoryName: string
  categoryColor: string
  startDateTime: Date
  endDateTime: Date
  displayDay: boolean
  displayMonth: boolean
  i: number
}

const Activity: React.FC<Props> = (props: Props) => {
  const [toggle, setToggle] = React.useState(false)
  const [inverted, setInverted] = React.useState(false)
  // const [yes, setYes] = React.useState(false)
  // const [maybe, setMaybe] = React.useState(false)
  // const [no, setNo] = React.useState(false)

  const activityIconSize = 36
  const detailIconSize = 17

  const activityIcon = (name: string, inverted: boolean): React.ReactNode => {
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
      <ActivityTimeline>
        <Timeline
          displayDay={props.displayDay}
          displayMonth={props.displayMonth}
          startDateTime={props.startDateTime}
          first={props.i === 0}
        />
      </ActivityTimeline>

      <ActivityItem
        toggle={toggle}
        backgroundColor={props.categoryColor}
        inverted={inverted}
        first={props.i === 0}
      >
        <ActivityBar>
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
                <span>
                  {/* {
                      props.allOrganisers.map(organisers => {
                        if (organisers.name == ) {

                        }
                        props.organisers.map(organiser => {

                        })
                      })
                    } */}
                </span>
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
