import * as React from 'react'
import styled from 'styled-components'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withFirestore, isLoaded, isEmpty } from 'react-redux-firebase'
import { RootState } from 'src/redux/store'
import { colors } from 'src/styles'
import { Activity, Loader } from 'src/components'

interface Props {
  firestore: any
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
  days: Array<{
    endTime: string
    name: string
    startTime: string
  }>
}

const MainContainer = styled.div``

const Main: React.FC<Props> = (props: Props) => {
  React.useEffect(() => {
    props.firestore.get('activities')
    props.firestore.get('categories')
    props.firestore.get('organisers')
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

const mapDispatchToProps = (dispatch: any, __ownProps: any): any => {
  return {}
}

export default compose(
  withFirestore,
  connect(mapStateToProps, mapDispatchToProps),
)(Main) as React.ComponentType
