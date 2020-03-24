import * as React from 'react'
import styled from 'styled-components'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseManager } from '../utils/firebase'
import { Link } from 'react-router-dom'
import { withFirestore, isLoaded, isEmpty } from 'react-redux-firebase'

import { Activity } from '../components'

interface Props {
  firestore: any
  activities: any
  isLoggedIn: boolean
}
// interface IActivity {
//   name: string
//   id: string
// }

const MainContainer = styled.div``

const Main: React.FC<Props> = (props: Props) => {
  React.useEffect(() => {
    props.firestore.get('activities')
  }, [])

  return (
    <MainContainer>
      <div>
        {props.isLoggedIn ? (
          <button onClick={(): unknown => firebaseManager.signOut()}>
            uitloggen
          </button>
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
                {console.log(activity)}

                <Activity name={activity.name}></Activity>
              </React.Fragment>
            ),
          )}
        </div>
      )}
    </MainContainer>
  )
}
const mapStateToProps = (state: any, ownProps: any) => {
  return {
    isLoggedIn: !state.firebase.auth.isEmpty,
    activities: state.firestore.ordered.activities,
  }
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {}
}

export default compose(
  withFirestore,
  connect(mapStateToProps, mapDispatchToProps),
)(Main) as React.ComponentType
