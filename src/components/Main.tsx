import * as React from 'react'
import styled from 'styled-components'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { isLoaded, isEmpty, firestoreConnect } from 'react-redux-firebase'
import { Activity, Category, Organiser, Registration } from 'src/types/database'
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
  if (!isLoaded(props.activities))
    return (
      <Loader
        height="500px"
        scale={2.5}
        color={colors.colors.orange}
        text="Activiteiten laden..."
      />
    )
  else if (isEmpty(props.activities)) return <p>Geen activiteiten gevonden.</p>
  else if (!isLoaded(props.categories))
    return (
      <Loader
        height="500px"
        scale={2.5}
        color={colors.colors.orange}
        text="Categorieën laden..."
      />
    )
  else if (!isLoaded(props.organisers))
    return (
      <Loader
        height="500px"
        scale={2.5}
        color={colors.colors.orange}
        text="Organisatoren laden..."
      />
    )
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

    interface SortedActivity extends Activity {
      startDateTime: Date
      endDateTime: Date
    }
    let sortedActivities: SortedActivity[] = []

    activities.forEach((activity) => {
      if (activity.day) {
        const dateArray = activity.day.date.split('-')
        const startTimeArray = activity.day.startTime.split(':')
        const startDateTime = new Date(
          Number(dateArray[0]),
          Number(dateArray[1]) - 1,
          Number(dateArray[2]),
          Number(startTimeArray[0]),
          Number(startTimeArray[1]),
        )
        const endTimeArray = activity.day.endTime.split(':')
        const endDateTime = new Date(
          Number(dateArray[0]),
          Number(dateArray[1]) - 1,
          Number(dateArray[2]),
          Number(endTimeArray[0]),
          Number(endTimeArray[1]),
        )
        sortedActivities.push({
          ...activity,
          startDateTime,
          endDateTime,
        })
      } else if (activity.days)
        activity.days
          .filter((day) => day.startTime !== '' && day.endTime !== '')
          .forEach((day) => {
            const weekday = getDayByString(day.name)

            const amountOfDays = 14
            for (let i = 0; i < amountOfDays; i++) {
              const date = new Date()
              date.setSeconds(0)
              date.setMilliseconds(0)
              const startTimeArray = day.startTime.split(':')
              const endTimeArray = day.endTime.split(':')

              const startDateTime = new Date(date)
              startDateTime.setDate(startDateTime.getDate() + i)
              startDateTime.setHours(Number(startTimeArray[0]))
              startDateTime.setMinutes(Number(startTimeArray[1]))
              const endDateTime = new Date(date)
              endDateTime.setDate(endDateTime.getDate() + i)
              endDateTime.setHours(Number(endTimeArray[0]))
              endDateTime.setMinutes(Number(endTimeArray[1]))

              if (weekday === startDateTime.getDay()) {
                if (endDateTime >= new Date())
                  sortedActivities.push({
                    ...activity,
                    startDateTime,
                    endDateTime,
                  })
                else if (endDateTime <= date) {
                  startDateTime.setDate(startDateTime.getDate() + amountOfDays)
                  endDateTime.setDate(endDateTime.getDate() + amountOfDays)
                  sortedActivities.push({
                    ...activity,
                    startDateTime,
                    endDateTime,
                  })
                }
              }
            }
          })
    })

    sortedActivities.sort((a, b) => {
      if (a.startDateTime < b.startDateTime) return -1
      if (a.startDateTime > b.startDateTime) return 1
      else return 0
    })

    // Additional filters defined
    if (
      props.filters.beweging ||
      props.filters.creatief ||
      props.filters.kinderen ||
      props.filters.taal ||
      props.filters.spiritueel ||
      props.filters.sociaal
    ) {
      // we waren hier
    }
    if (props.filters.beweging)
      sortedActivities = sortedActivities.filter((_activity) =>
        props.categories.find(
          (_category) =>
            _category.filterName === 'beweging' &&
            _activity.category.split('/')[1] === _category.id,
        ),
      )

    if (props.filters.creatief)
      sortedActivities = sortedActivities.filter((_activity) =>
        props.categories.find(
          (_category) =>
            _category.filterName === 'creatief' &&
            _activity.category.split('/')[1] === _category.id,
        ),
      )
    if (props.filters.kinderen)
      sortedActivities = sortedActivities.filter((_activity) =>
        props.categories.find(
          (_category) =>
            _category.filterName === 'kinderen' &&
            _activity.category.split('/')[1] === _category.id,
        ),
      )
    if (props.filters.sociaal)
      sortedActivities = sortedActivities.filter((_activity) =>
        props.categories.find(
          (_category) =>
            _category.filterName === 'sociaal' &&
            _activity.category.split('/')[1] === _category.id,
        ),
      )
    if (props.filters.spiritueel)
      sortedActivities = sortedActivities.filter((_activity) =>
        props.categories.find(
          (_category) =>
            _category.filterName === 'spiritueel' &&
            _activity.category.split('/')[1] === _category.id,
        ),
      )
    if (props.filters.taal)
      sortedActivities = sortedActivities.filter((_activity) =>
        props.categories.find(
          (_category) =>
            _category.filterName === 'taal' &&
            _activity.category.split('/')[1] === _category.id,
        ),
      )

    if (props.filters.mijn)
      sortedActivities = sortedActivities.filter((_activity) =>
        registrations.find(
          (_registration) =>
            _registration.activity.split('/')[1] === _activity.id &&
            _registration.status !== 'NOT_ATTENDING',
        ),
      )

    if (props.filters.speciaal)
      sortedActivities = sortedActivities.filter((_activity) => {
        if (_activity.day) return true
        else return false
      })

    return (
      <StyledTimeline>
        {sortedActivities.map(
          (activity: SortedActivity, i: any): React.ReactNode => {
            const category = props.categories.find(
              (category) => category.id === activity.category.split('/')[1],
            ) || { name: '', color: '' }
            let displayDay = true
            let displayMonth = true

            // See if activity is first of the day
            if (
              sortedActivities[i - 1]?.startDateTime.getFullYear() ===
                activity.startDateTime.getFullYear() &&
              sortedActivities[i - 1]?.startDateTime.getMonth() ===
                activity.startDateTime.getMonth() &&
              sortedActivities[i - 1]?.startDateTime.getDate() ===
                activity.startDateTime.getDate()
            )
              displayDay = false

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

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props: StateProps) => [
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
