import * as React from 'react'
import { toast } from 'react-toastify'
import { withRouter } from 'react-router-dom'
import ChevronGrey from 'src/assets/general/chevron_grey.svg'
import ChevronWhite from 'src/assets/general/chevron_white.svg'
import Icon from '../Icon'
import {
  StyledContainer,
  StyledTimeline,
  StyledItem,
  StyledBar,
  StyledLogoTitle,
  StyledToggle,
  StyledDetails,
  StyledDetail,
  StyledDetailIcon,
  StyledLine,
  StyledMeedoen,
  StyledButtons,
  StyledButton,
} from './styles'
import { Props } from './types'
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
  // ParticipantsIcon,
  TimeIcon,
} from 'src/assets/activity_details'
import { Organiser } from 'src/types/firestore'
import { fireAuth, fireStore } from 'src/utils/firebase'

const Activity: React.FC<Props> = (props: Props) => {
  const [toggle, setToggle] = React.useState(false) // state if activity is toggled open or not
  const [inverted, setInverted] = React.useState(false) // state if the colors of the activity are inverted or not

  React.useEffect(() => {
    !toggle // check if not toggled
      ? props.registration // check if registered to activity
        ? props.registration?.status !== 'NOT_ATTENDING' // check if registration status is 'not attending'
          ? setInverted(true) // if registration status not is 'NOT_ATTENDING' set inverted to true
          : setInverted(false) // if registration status is 'NOT_ATTENDING' set inverted to false
        : setInverted(false) // if not registered to activity setInverted to false
      : setInverted(true) // if activity is toggled set inverted to true
  }, [props.registration, toggle])

  const activityIconSize = 36
  const detailIconSize = 17

  const organiserObjects: Organiser[] = []

  // find the correct organiser for the activity and push the organiser to the organiserObjects array
  props.organisers.forEach((_organiser: string) => {
    const correctOrganiser = props.allOrganisers.find(
      (_dbOrganiser) => _dbOrganiser.id === _organiser,
    )
    if (correctOrganiser) organiserObjects.push(correctOrganiser)
  })

  // display icon or inverted icon if activity colors are inverted
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

  // if activity is clicked toggle the toggle and inverted states
  const toggleActivity = (): void => {
    if (!props.registration) setInverted(!inverted)
    setToggle(!toggle)
  }

  const registerForActivity = (status: string, activityID: string): void => {
    const activityRef = `activities/${activityID}`

    fireStore
      .collection('users')
      .doc(fireAuth.currentUser?.uid)
      .collection('registrations')
      .where('activity', '==', activityRef)
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
              activity: activityRef,
              status,
            })
        }
      })
  }

  return (
    <StyledContainer>
      <StyledTimeline>
        <Timeline
          displayDay={props.displayDay}
          displayMonth={props.displayMonth}
          startDateTime={props.startDateTime}
          first={props.i === 0}
          status={props.registration?.status}
        />
      </StyledTimeline>

      <StyledItem
        toggle={toggle}
        backgroundColor={props.categoryColor}
        inverted={inverted}
        first={props.i === 0}
      >
        <StyledBar onClick={(): void => toggleActivity()}>
          <StyledLogoTitle>
            {activityIcon(props.categoryName, inverted)}
            <span>{props.name}</span>
          </StyledLogoTitle>

          <StyledToggle toggle={toggle}>
            <img
              width="20px"
              height="20px"
              src={inverted ? ChevronWhite : ChevronGrey}
              alt={`Arrow ${inverted ? 'up' : 'down'}`}
            />
          </StyledToggle>
        </StyledBar>

        <StyledDetails>
          <StyledDetail>
            <StyledDetailIcon src={TimeIcon} size={detailIconSize} alt="" />
            <div>
              <span>
                {/* display hour */}
                {`${props.startDateTime.getHours()}`}:
                {props.startDateTime.getMinutes() < 10 && '0'}
                {`${props.startDateTime.getMinutes()}`}-{/* display minutues */}
                {`${props.endDateTime.getHours()}`}:
                {props.endDateTime.getMinutes() < 10 && '0'}
                {`${props.endDateTime.getMinutes()}`}
              </span>
            </div>
          </StyledDetail>
          <StyledDetail>
            <StyledDetailIcon src={CartIcon} size={detailIconSize} alt="" />
            <div>
              {/* display 'geen' als er geen organisers zijn anders display the organisers  */}
              {organiserObjects.length < 1 ? (
                <span>geen</span>
              ) : (
                organiserObjects.map((_organiser, i) => (
                  <span key={i}>{_organiser.name}</span>
                ))
              )}
            </div>
          </StyledDetail>
          <StyledDetail>
            <StyledDetailIcon src={LocationIcon} size={detailIconSize} alt="" />
            <div>
              <span>{props.room} </span>
            </div>
          </StyledDetail>
        </StyledDetails>

        <StyledLine />

        <StyledMeedoen>
          <span>Meedoen met {props.name}?</span>
          {props.isLoggedIn ? (
            <StyledButtons>
              <StyledButton
                categoryColor={props.categoryColor}
                notActive={props.registration?.status !== 'ATTENDING'}
                onClick={(): void => {
                  // register for the activity with status ATTENDING
                  registerForActivity('ATTENDING', props.id)
                  // toggle activity
                  setToggle(!toggle)
                  // remove the toast if it's already there
                  toast.dismiss(`${props.id}${props.i}`)
                  // show a toast
                  toast(`Je doet mee met ${props.name}!`, {
                    type: toast.TYPE.SUCCESS,
                    toastId: `${props.id}${props.i}`,
                  })
                }}
              >
                Ja
              </StyledButton>
              <StyledButton
                categoryColor={props.categoryColor}
                notActive={props.registration?.status !== 'MAYBE_ATTENDING'}
                onClick={(): void => {
                  // register for the activity with status MAYBE_ATTENDING
                  registerForActivity('MAYBE_ATTENDING', props.id)
                  // toggle activity
                  setToggle(!toggle)
                  // remove the toast if it's already there
                  toast.dismiss(`${props.id}${props.i}`)
                  // show a toast
                  toast(`Je doet misschien mee met ${props.name}!`, {
                    type: toast.TYPE.WARNING,
                    toastId: `${props.id}${props.i}`,
                  })
                }}
              >
                Misschien
              </StyledButton>
              <StyledButton
                categoryColor={props.categoryColor}
                notActive={props.registration?.status !== 'NOT_ATTENDING'}
                onClick={(): void => {
                  // register for the activity with status NOT_ATTENDING
                  registerForActivity('NOT_ATTENDING', props.id)
                  // toggle activity
                  setToggle(!toggle)
                  // remove the toast if it's already there
                  toast.dismiss(`${props.id}${props.i}`)
                  // show a toast
                  toast(`Je doet niet mee met ${props.name}!`, {
                    type: toast.TYPE.ERROR,
                    toastId: `${props.id}${props.i}`,
                  })
                }}
              >
                Nee
              </StyledButton>
            </StyledButtons>
          ) : (
            <StyledButtons>
              <StyledButton
                categoryColor={props.categoryColor}
                onClick={(): void => props.history.push('/login')}
              >
                Inloggen
              </StyledButton>
            </StyledButtons>
          )}
        </StyledMeedoen>
      </StyledItem>
    </StyledContainer>
  )
}

export default withRouter(Activity)
