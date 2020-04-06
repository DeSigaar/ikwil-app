import * as React from 'react'
import styled from 'styled-components'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { isLoaded, isEmpty, firestoreConnect } from 'react-redux-firebase'
import { RootState } from 'src/redux/store'
import { colors } from 'src/styles'
import { Activity, Loader } from 'src/components'

interface Props {
  activities: Activities[]
  categories: Categories[]
  organisers: Organisers[]
  isLoggedIn: boolean
  isInstallPromptSet: boolean
}

interface Categories {
  id: string
  __deleted: boolean
  bio: string
  color: string
  icon: string
  name: string
}
export interface Organisers {
  createdBy: string
  creatorID: string
  description: string
  isAvaible: boolean
  name: string
  place: string
  id: string
}
export interface Activities {
  id: string
  category: string
  name: string
  organisers: string[]
  repeats: boolean
  room: string
  days: Days[]
}

export interface Days {
  name: string
  days: Day[]
}
export interface Day {
  endTime: string
  date: string
  startTime: string
}

const MainContainer = styled.div``

const Main: React.FC<Props> = (props: Props) => {
  React.useEffect(() => {
    console.log(props)
  }, [])

  const getSecondPart = (str: string, divider: string): string => {
    return str.split(divider)[1]
  }

  return (
    <MainContainer>
      {!isLoaded(props.activities) ? (
        <Loader
          height="500px"
          scale={2.5}
          color={colors.colors.orange}
          text="Activiteiten laden..."
        />
      ) : isEmpty(props.activities) ? (
        'Geen activiteiten gevonden.'
      ) : (
        <div>
          {props.activities.map(
            (activity: any): React.ReactNode => (
              <React.Fragment key={activity.id}>
                {!isLoaded(props.categories) ? (
                  <Loader
                    height="500px"
                    scale={2.5}
                    color={colors.colors.orange}
                    text="Categorieën laden..."
                  />
                ) : isEmpty(props.categories) ? (
                  'Geen categorieën gevonden.'
                ) : (
                  props.categories.map((category) => (
                    <React.Fragment key={category.id}>
                      {category.id ===
                        getSecondPart(activity.category, '/') && (
                        <Activity
                          name={activity.name}
                          categoryName={category.name}
                          categoryColor={category.color}
                          repeats={activity.repeats}
                          room={activity.room}
                          organisers={activity.organisers.map(
                            (organiser: string) =>
                              getSecondPart(organiser, '/'),
                          )}
                          allOrganisers={props.organisers}
                          days={activity.days}
                          day={activity.day}
                        ></Activity>
                      )}
                    </React.Fragment>
                  ))
                )}
              </React.Fragment>
            ),
          )}
        </div>
      )}
    </MainContainer>
  )
}

const mapStateToProps = (state: RootState, ownProps: any): any => {
  return {
    isLoggedIn: !state.firebase.auth.isEmpty,
    activities: state.firestore.ordered.activities,
    categories: state.firestore.ordered.categories,
    organisers: state.firestore.ordered.organisers,
    isInstallPromptSet: !!state.app.installPrompt,
  }
}

// const mapDispatchToProps = (dispatch: any, __ownProps: any): any => {
//   return {}
// }

export default compose(
  firestoreConnect(() => [
    { collection: 'activities', where: [['__deleted', '==', false]] },
    { collection: 'categories', where: [['__deleted', '==', false]] },
    { collection: 'organisers', where: [['__deleted', '==', false]] },
  ]),
  connect(mapStateToProps, null),
)(Main) as React.ComponentType
