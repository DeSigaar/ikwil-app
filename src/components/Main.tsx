import * as React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { isLoaded, isEmpty, firestoreConnect } from 'react-redux-firebase'
import { Activity, Category, Organiser } from 'src/types/database'
import { RootState } from 'src/redux/store'
import { colors } from 'src/styles'
import { Loader, Activity as ActivityComponent } from 'src/components'

interface OwnProps {}

interface StateProps {
  isLoggedIn: boolean
  isInstallPromptSet: boolean
  activities: Activity[]
  categories: Category[]
  organisers: Organiser[]
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
  else if (isEmpty(props.categories)) return <p>Geen categorieën gevonden.</p>
  else {
    const { activities } = props

    interface SortedActivity extends Activity {
      startDateTime: Date
      endDateTime: Date
    }
    const sortedActivities: SortedActivity[] = []

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
            let weekday = 0
            switch (day.name.toLowerCase()) {
              case 'monday':
                weekday = 1
                break
              case 'tuesday':
                weekday = 2
                break
              case 'wednesday':
                weekday = 3
                break
              case 'thursday':
                weekday = 4
                break
              case 'friday':
                weekday = 5
                break
              case 'saturday':
                weekday = 6
                break
              case 'sunday':
              default:
                weekday = 0
                break
            }

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

    return (
      <div className="timeline">
        {sortedActivities.map(
          (activity: SortedActivity, i): React.ReactNode => {
            const category = props.categories.find(
              (category) => category.id === activity.category.split('/')[1],
            ) || { name: '', color: '' }

            return (
              <ActivityComponent
                key={activity.id + i}
                {...activity}
                categoryName={category.name}
                categoryColor={category.color}
                organisers={activity.organisers.map(
                  (organiser) => organiser.split('/')[1],
                )}
                allOrganisers={props.organisers}
              ></ActivityComponent>
            )
          },
        )}
      </div>
    )
  }
}

const mapStateToProps = (state: RootState, ownProps: OwnProps): StateProps => {
  return {
    ...ownProps,
    isLoggedIn: !state.firebase.auth.isEmpty,
    isInstallPromptSet: !!state.app.installPrompt,
    activities: state.firestore.ordered.activities,
    categories: state.firestore.ordered.categories,
    organisers: state.firestore.ordered.organisers,
  }
}

export default compose(
  firestoreConnect(() => [
    { collection: 'activities', where: [['__deleted', '==', false]] },
    { collection: 'categories', where: [['__deleted', '==', false]] },
    { collection: 'organisers', where: [['__deleted', '==', false]] },
  ]),
  connect(mapStateToProps, null),
)(Main) as React.ComponentType
