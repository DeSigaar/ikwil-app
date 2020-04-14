import * as React from 'react'
import * as firebase from 'firebase'
import { toast } from 'react-toastify'
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
import {
  Organiser,
  Activity as ActivityInterface,
  Registration,
} from 'src/types/database'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { fireAuth, fireStore } from 'src/utils/firebase'

interface Props extends ActivityInterface, RouteComponentProps {
  organisers: string[]
  allOrganisers: Organiser[]
  categoryName: string
  categoryColor: string
  startDateTime: Date
  endDateTime: Date
  displayDay: boolean
  displayMonth: boolean
  isLoggedIn: boolean
  i: number
  registration?: Registration
}

const Activity: React.FC<Props> = (props: Props) => {
  const [toggle, setToggle] = React.useState(false)
  const [inverted, setInverted] = React.useState(false)
  const [aanmeldingen] = React.useState([])

  React.useEffect(() => {
    !toggle
      ? props.registration
        ? props.registration?.status !== 'NOT_ATTENDING'
          ? setInverted(true)
          : setInverted(false)
        : setInverted(false)
      : setInverted(true)
  }, [props.registration, toggle])

  const activityIconSize = 36
  const detailIconSize = 17

  const organiserObjects: Organiser[] = []

  props.organisers.forEach((_organiser: string) => {
    const correctOrganiser = props.allOrganisers.find(
      (_dbOrganiser) => _dbOrganiser.id === _organiser,
    )
    if (correctOrganiser) organiserObjects.push(correctOrganiser)
  })

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
    if (!props.registration) setInverted(!inverted)
    setToggle(!toggle)
  }

  const registerForActivity = (
    status: string,
    activityID: string,
    activityStartDateTime: Date,
  ): void => {
    const timestamp = firebase.firestore.Timestamp.fromDate(
      activityStartDateTime,
    )
    const activityRef = `activities/${activityID}`

    fireStore
      .collection('users')
      .doc(fireAuth.currentUser?.uid)
      .collection('registrations')
      .where('activity', '==', activityRef)
      .where('date', '==', timestamp)
      .get()
      .then((_doc) => {
        if (_doc.docs[0]?.data()) {
          // Document/registration exists - Update the document
          fireStore
            .collection('users')
            .doc(fireAuth.currentUser?.uid)
            .collection('registrations')
            .doc(_doc.docs[0].id)
            .update({ status })
        } else {
          // Document/registration does not exist - Create document
          fireStore
            .collection('users')
            .doc(fireAuth.currentUser?.uid)
            .collection('registrations')
            .add({
              date: timestamp,
              activity: activityRef,
              status,
            })
        }
      })
  }

  return (
    <ActivityContainer>
      <ActivityTimeline>
        <Timeline
          displayDay={props.displayDay}
          displayMonth={props.displayMonth}
          startDateTime={props.startDateTime}
          first={props.i === 0}
          status={props.registration?.status}
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

        <Details>
          <Detail>
            <DetailIcon src={TimeIcon} size={detailIconSize} alt="" />
            <span>
              {`${props.startDateTime.getHours()}`}:
              {props.startDateTime.getMinutes() < 10 && '0'}
              {`${props.startDateTime.getMinutes()}`}-
              {`${props.endDateTime.getHours()}`}:
              {props.endDateTime.getMinutes() < 10 && '0'}
              {`${props.endDateTime.getMinutes()}`}
            </span>
          </Detail>
          <Detail>
            <DetailIcon src={CartIcon} size={detailIconSize} alt="" />
            {organiserObjects.map((_organiser, i) => (
              <span key={i}>{_organiser.name}</span>
            ))}
          </Detail>
          <Detail>
            <DetailIcon src={LocationIcon} size={detailIconSize} alt="" />
            <span>{props.room} </span>
          </Detail>
          <Detail>
            <DetailIcon src={ParticipantsIcon} size={detailIconSize} alt="" />
            <span>{aanmeldingen.length} </span>
          </Detail>
        </Details>
        <Line />
        <Meedoen>
          <span>Meedoen met {props.name}?</span>
          {props.isLoggedIn ? (
            <Buttons>
              <ActivityButton
                categoryColor={props.categoryColor}
                notActive={props.registration?.status !== 'ATTENDING'}
                onClick={(): void => {
                  registerForActivity(
                    'ATTENDING',
                    props.id,
                    props.startDateTime,
                  )
                  setToggle(!toggle)

                  toast.dismiss(`${props.id}${props.i}`)
                  toast(`Je doet mee met ${props.name}!`, {
                    type: toast.TYPE.SUCCESS,
                    toastId: `${props.id}${props.i}`,
                  })
                }}
              >
                Ja
              </ActivityButton>
              <ActivityButton
                categoryColor={props.categoryColor}
                notActive={props.registration?.status !== 'MAYBE_ATTENDING'}
                onClick={(): void => {
                  registerForActivity(
                    'MAYBE_ATTENDING',
                    props.id,
                    props.startDateTime,
                  )
                  setToggle(!toggle)

                  toast.dismiss(`${props.id}${props.i}`)
                  toast(`Je doet misschien mee met ${props.name}!`, {
                    type: toast.TYPE.WARNING,
                    toastId: `${props.id}${props.i}`,
                  })
                }}
              >
                Misschien
              </ActivityButton>
              <ActivityButton
                categoryColor={props.categoryColor}
                notActive={props.registration?.status !== 'NOT_ATTENDING'}
                onClick={(): void => {
                  registerForActivity(
                    'NOT_ATTENDING',
                    props.id,
                    props.startDateTime,
                  )
                  setToggle(!toggle)

                  toast.dismiss(`${props.id}${props.i}`)
                  toast(`Je doet niet mee met ${props.name}!`, {
                    type: toast.TYPE.ERROR,
                    toastId: `${props.id}${props.i}`,
                  })
                }}
              >
                Nee
              </ActivityButton>
            </Buttons>
          ) : (
            <Buttons>
              <ActivityButton
                categoryColor={props.categoryColor}
                onClick={(): void => props.history.push('/login')}
              >
                Inloggen
              </ActivityButton>
            </Buttons>
          )}
        </Meedoen>
      </ActivityItem>
    </ActivityContainer>
  )
}

export default withRouter(Activity)
