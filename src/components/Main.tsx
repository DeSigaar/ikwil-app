import * as React from 'react'
import styled from 'styled-components'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withFirestore, isLoaded, isEmpty } from 'react-redux-firebase'
import { toast } from 'react-toastify'
import { RootState } from 'src/redux/store'
import { colors } from 'src/styles'
import { Activity, Toast } from 'src/components'

interface Props {
  firestore: any
  activities: Activities[]
  categories: Categories[]
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

const StyledLoading = styled.div`
  display: block;
  box-sizing: border-box;
  height: 4px;
  border-radius: 4px;
  position: relative;
  transform: scale(var(--ggs, 1));
  width: 18px;

  &::before,
  &::after {
    display: block;
    box-sizing: border-box;
    height: 4px;
    border-radius: 4px;
    background: ${colors.colors.black};
    content: '';
    position: absolute;
  }
  &::before {
    animation: loadbar 2s cubic-bezier(0, 0, 0.58, 1) infinite;
  }
  &::after {
    width: 18px;
    opacity: 0.3;
  }

  @keyframes loadbar {
    0%,
    to {
      left: 0;
      right: 80%;
    }
    25%,
    75% {
      left: 0;
      right: 0;
    }
    50% {
      left: 80%;
      right: 0;
    }
  }
`

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
      <button onClick={(): unknown => toast(<Toast />)}>
        Click me for a toast
      </button>

      {!isLoaded(props.activities) ? (
        <StyledLoading />
      ) : isEmpty(props.activities) ? (
        'Activity list is empty'
      ) : (
        <div>
          {props.activities.map(
            (activity: any): React.ReactNode => (
              <React.Fragment key={activity.id}>
                {!isLoaded(props.categories) ? (
                  <StyledLoading />
                ) : isEmpty(props.categories) ? (
                  'Categories are empty'
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
                          organisers={activity.organisers}
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
