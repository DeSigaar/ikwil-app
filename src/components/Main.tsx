import * as React from 'react'
import styled from 'styled-components'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withFirestore, isLoaded, isEmpty } from 'react-redux-firebase'
import { fireAuth } from 'src/utils/firebase'
import { RootState } from 'src/redux/store'

import { Activity } from '../components'
interface Props {
  firestore: any
  activities: Activities[]
  categories: Categories[]
  isLoggedIn: boolean
}

interface Categories {
  id: string
  __deleted: boolean
  bio: string
  color: string
  icon: string
  name: string
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

interface Days {
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
  }, [])

  const getSecondPart = (str: string, divider: string): string => {
    return str.split(divider)[1]
  }

  return (
    <MainContainer>
      <div>
        {props.isLoggedIn ? (
          <button onClick={(): unknown => fireAuth.signOut()}>uitloggen</button>
        ) : (
          <Link to="/login">
            <button>inloggen</button>
          </Link>
        )}
      </div>
      {!isLoaded(props.activities) ? (
        'Loading'
      ) : isEmpty(props.activities) ? (
        'Activity list is empty'
      ) : (
        <div>
          {props.activities.map(
            (activity: any): React.ReactNode => (
              <React.Fragment key={activity.id}>
                {console.log(props)}

                {!isLoaded(props.categories)
                  ? 'Loading'
                  : isEmpty(props.categories)
                  ? 'Categories are empty'
                  : props.categories.map((category) => (
                      <React.Fragment key={category.id}>
                        {category.id ===
                          getSecondPart(activity.category, '/') && (
                          <Activity
                            name={activity.name}
                            categoryName={category.name}
                            categoryColor={category.color}
                            repeats={activity.repeats}
                            room={activity.room}
                            organisers={activity.organisers}
                            days={activity.days}
                          ></Activity>
                        )}
                      </React.Fragment>
                    ))}
              </React.Fragment>
            ),
          )}
        </div>
      )}
    </MainContainer>
  )
}

const mapStateToProps = (state: RootState, ownProps: any) => {
  return {
    isLoggedIn: !state.firebase.auth.isEmpty,
    activities: state.firestore.ordered.activities,
    categories: state.firestore.ordered.categories,
  }
}

const mapDispatchToProps = (__dispatch: any, __ownProps: any) => {
  return {}
}

export default compose(
  withFirestore,
  connect(mapStateToProps, mapDispatchToProps),
)(Main) as React.ComponentType
