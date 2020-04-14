import * as React from 'react'
import styled from 'styled-components'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { isLoaded, isEmpty, firestoreConnect } from 'react-redux-firebase'
import {
  Activity,
  Category,
  Organiser,
  Registration,
} from 'src/types/firestore'
import { RootState } from 'src/redux/store'
import { colors, layout } from 'src/styles'
import { Loader, Activity as ActivityComponent } from 'src/components'
import { getDayByString } from 'src/utils/date'
import { FilterState } from 'src/redux/filter'

const StyledTimeline = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${layout.unit}px;
`

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface OwnProps {}

interface StateProps {
  uid: string
  isLoggedIn: boolean
  isInstallPromptSet: boolean
  activities: Activity[]
  categories: Category[]
  organisers: Organiser[]
  registrations: Registration[]
  filters: FilterState
}

type Props = OwnProps & StateProps

const Main: React.FC<Props> = (props: Props) => {
  interface SortedActivity extends Activity {
    startDateTime: Date
    endDateTime: Date
  }

  const createActivityArray = (activities: Activity[]): SortedActivity[] => {
    const result: SortedActivity[] = []

    // Loop over all activities to create items for in the home screen
    activities.forEach((activity) => {
      if (activity.day) {
        // If the activity is a single event

        // Split date to values
        const dateArray = activity.day.date.split('-')
        // Split start time to values
        const startTimeArray = activity.day.startTime.split(':')
        // Create start date time object with values from activity
        const startDateTime = new Date(
          Number(dateArray[0]),
          Number(dateArray[1]) - 1,
          Number(dateArray[2]),
          Number(startTimeArray[0]),
          Number(startTimeArray[1]),
        )
        // Split end time to values
        const endTimeArray = activity.day.endTime.split(':')
        // Create end date time object with values from activity
        const endDateTime = new Date(
          Number(dateArray[0]),
          Number(dateArray[1]) - 1,
          Number(dateArray[2]),
          Number(endTimeArray[0]),
          Number(endTimeArray[1]),
        )
        // Push result to array as sorted activity
        result.push({
          ...activity,
          startDateTime,
          endDateTime,
        })
      } else if (activity.days) {
        // If the activity is repeated weekly

        // Filter all activity entries where the day is not defined and loop over all non-empty values
        activity.days
          .filter((day) => day.startTime !== '' && day.endTime !== '')
          .forEach((day) => {
            // Get the weekday number by string value
            const weekday = getDayByString(day.name)

            // Set amount of days to display
            const amountOfDays = 14
            // For each day
            for (let i = 0; i < amountOfDays; i++) {
              const date = new Date()
              date.setSeconds(0)
              date.setMilliseconds(0)
              // Split start time to values
              const startTimeArray = day.startTime.split(':')
              // Split end time to values
              const endTimeArray = day.endTime.split(':')

              // Create start date time object with values from activity
              const startDateTime = new Date(date)
              startDateTime.setDate(startDateTime.getDate() + i)
              startDateTime.setHours(Number(startTimeArray[0]))
              startDateTime.setMinutes(Number(startTimeArray[1]))
              // Create end date time object with values from activity
              const endDateTime = new Date(date)
              endDateTime.setDate(endDateTime.getDate() + i)
              endDateTime.setHours(Number(endTimeArray[0]))
              endDateTime.setMinutes(Number(endTimeArray[1]))

              // Check if weekday equals to activity day, if so continue, else stop
              if (weekday === startDateTime.getDay())
                if (endDateTime >= new Date()) {
                  // Check if end date is not passed, if so push, else change to next week
                  result.push({
                    ...activity,
                    startDateTime,
                    endDateTime,
                  })
                } else if (endDateTime <= date) {
                  startDateTime.setDate(startDateTime.getDate() + amountOfDays)
                  endDateTime.setDate(endDateTime.getDate() + amountOfDays)
                  result.push({
                    ...activity,
                    startDateTime,
                    endDateTime,
                  })
                }
            }
          })
      }
    })
    return result
  }

  // check if activities are loaded, display a loader if it's still loading
  if (!isLoaded(props.activities))
    return (
      <Loader
        height="500px"
        scale={2.5}
        color={colors.colors.orange}
        text="Activiteiten laden..."
      />
    )
  // check if there are any, display 'Geen activiteiten gevonden.' if there ain't no activities
  else if (isEmpty(props.activities)) return <p>Geen activiteiten gevonden.</p>
  // check if categories are loaded, display a loader if it's still loading
  else if (!isLoaded(props.categories))
    return (
      <Loader
        height="500px"
        scale={2.5}
        color={colors.colors.orange}
        text="Categorieën laden..."
      />
    )
  // check if organisers are loaded, display a loader if it's still loading
  else if (!isLoaded(props.organisers))
    return (
      <Loader
        height="500px"
        scale={2.5}
        color={colors.colors.orange}
        text="Organisatoren laden..."
      />
    )
  // check if registrations are loaded, display a loader if it's still loading
  else if (!isLoaded(props.registrations))
    return (
      <Loader
        height="500px"
        scale={2.5}
        color={colors.colors.orange}
        text="Aanmeldingen laden..."
      />
    )
  else {
    const { activities, registrations } = props

    let sortedActivities = createActivityArray(activities)

    // sort the activities by time
    sortedActivities.sort((a, b) => {
      if (a.startDateTime < b.startDateTime) return -1
      if (a.startDateTime > b.startDateTime) return 1
      else return 0
    })

    // display only activities that haven't passed yet
    sortedActivities = sortedActivities.filter(
      (_activity) => _activity.endDateTime >= new Date(),
    )

    // filter by searchbar
    // toLowerCase to remove case sensitive searches
    // searchbar works with name, room, descrition and createdBy
    if (props.filters.search)
      sortedActivities = sortedActivities.filter(
        (_activity) =>
          _activity.name
            .toLowerCase()
            .includes(props.filters.search.toLowerCase()) ||
          _activity.room
            .toLowerCase()
            .includes(props.filters.search.toLowerCase()) ||
          _activity.description
            .toLowerCase()
            .includes(props.filters.search.toLowerCase()) ||
          _activity.createdBy
            .toLowerCase()
            .includes(props.filters.search.toLowerCase()),
      )

    // Additional filters defined
    if (
      props.filters.beweging ||
      props.filters.creatief ||
      props.filters.kinderen ||
      props.filters.taal ||
      props.filters.spiritueel ||
      props.filters.sociaal
    ) {
      // TODO: continue here for multiple filters functionality
    }

    // display only activities with the 'beweging' category
    if (props.filters.beweging)
      sortedActivities = sortedActivities.filter((_activity) =>
        props.categories.find(
          (_category) =>
            _category.filterName === 'beweging' &&
            _activity.category.split('/')[1] === _category.id,
        ),
      )

    // display only activities with the 'creatief' category
    if (props.filters.creatief)
      sortedActivities = sortedActivities.filter((_activity) =>
        props.categories.find(
          (_category) =>
            _category.filterName === 'creatief' &&
            _activity.category.split('/')[1] === _category.id,
        ),
      )

    // display only activities with the 'kinderen' category
    if (props.filters.kinderen)
      sortedActivities = sortedActivities.filter((_activity) =>
        props.categories.find(
          (_category) =>
            _category.filterName === 'kinderen' &&
            _activity.category.split('/')[1] === _category.id,
        ),
      )

    // display only activities with the 'sociaal' category
    if (props.filters.sociaal)
      sortedActivities = sortedActivities.filter((_activity) =>
        props.categories.find(
          (_category) =>
            _category.filterName === 'sociaal' &&
            _activity.category.split('/')[1] === _category.id,
        ),
      )

    // display only activities with the 'spiritueel' category
    if (props.filters.spiritueel)
      sortedActivities = sortedActivities.filter((_activity) =>
        props.categories.find(
          (_category) =>
            _category.filterName === 'spiritueel' &&
            _activity.category.split('/')[1] === _category.id,
        ),
      )

    // display only activities with the 'taal' category
    if (props.filters.taal)
      sortedActivities = sortedActivities.filter((_activity) =>
        props.categories.find(
          (_category) =>
            _category.filterName === 'taal' &&
            _activity.category.split('/')[1] === _category.id,
        ),
      )

    // display only activities that are registered to
    if (props.filters.mijn)
      sortedActivities = sortedActivities.filter((_activity) =>
        registrations.find(
          (_registration) =>
            _registration.activity.split('/')[1] === _activity.id &&
            _registration.status !== 'NOT_ATTENDING',
        ),
      )

    // display only activities that happen once
    if (props.filters.speciaal)
      sortedActivities = sortedActivities.filter((_activity) => {
        if (_activity.day) return true
        else return false
      })

    return (
      <StyledTimeline>
        {/* map activities and find the right category for the activty */}
        {sortedActivities.map(
          (activity: SortedActivity, i: number): React.ReactNode => {
            const category = props.categories.find(
              (category) => category.id === activity.category.split('/')[1],
            ) || { name: '', color: '' }
            let displayDay = true
            let displayMonth = true

            // See if activity is first of the day

            // check if previous item in the list shows a date, don't display if it does
            if (
              sortedActivities[i - 1]?.startDateTime.getFullYear() ===
                activity.startDateTime.getFullYear() &&
              sortedActivities[i - 1]?.startDateTime.getMonth() ===
                activity.startDateTime.getMonth() &&
              sortedActivities[i - 1]?.startDateTime.getDate() ===
                activity.startDateTime.getDate()
            )
              displayDay = false

            // check if previous item in the list shows a month, don't display if it does
            if (
              sortedActivities[i - 1]?.startDateTime.getFullYear() ===
                activity.startDateTime.getFullYear() &&
              sortedActivities[i - 1]?.startDateTime.getMonth() ===
                activity.startDateTime.getMonth()
            )
              displayMonth = false

            const registration = registrations.find(
              (_registration) =>
                _registration.activity.split('/')[1] === activity.id,
            )

            return (
              <ActivityComponent
                key={activity.id + i}
                i={i}
                {...activity}
                displayDay={displayDay}
                displayMonth={displayMonth}
                categoryName={category.name}
                categoryColor={category.color}
                organisers={activity.organisers.map(
                  (organiser) => organiser.split('/')[1],
                )}
                allOrganisers={props.organisers}
                isLoggedIn={props.isLoggedIn}
                registration={registration}
              ></ActivityComponent>
            )
          },
        )}
      </StyledTimeline>
    )
  }
}

const mapStateToProps = (state: RootState, ownProps: OwnProps): StateProps => {
  return {
    ...ownProps,
    uid: state.firebase.auth.uid || 'noUID',
    isLoggedIn: !state.firebase.auth.isEmpty,
    isInstallPromptSet: !!state.app.installPrompt,
    activities: state.firestore.ordered.activities,
    categories: state.firestore.ordered.categories,
    organisers: state.firestore.ordered.organisers,
    registrations: state.firestore.ordered.registrations,
    filters: {
      search: state.filter.search,
      beweging: state.filter.beweging,
      creatief: state.filter.creatief,
      kinderen: state.filter.kinderen,
      sociaal: state.filter.sociaal,
      spiritueel: state.filter.spiritueel,
      taal: state.filter.taal,
      mijn: state.filter.mijn,
      speciaal: state.filter.speciaal,
    },
  }
}

interface FirestoreConnectProps {
  uid: string
}

export default compose(
  connect(mapStateToProps, null),
  firestoreConnect((props: FirestoreConnectProps) => [
    { collection: 'activities', where: [['__deleted', '==', false]] },
    { collection: 'categories', where: [['__deleted', '==', false]] },
    { collection: 'organisers', where: [['__deleted', '==', false]] },
    {
      collection: 'users',
      doc: props.uid,
      storeAs: 'registrations',
      subcollections: [{ collection: 'registrations' }],
    },
  ]),
)(Main) as React.ComponentType
