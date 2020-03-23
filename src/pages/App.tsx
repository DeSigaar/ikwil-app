import * as React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Header, Main } from '../components/index'
import { firebaseManager } from '../utils/firebase'

interface Props {
  isLoggedIn: boolean
}

const App: React.FC<Props> = (props: Props) => {
  return (
    <>
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
      <Header />
      <Main />
    </>
  )
}

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    isLoggedIn: !state.firebase.auth.isEmpty,
  }
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
