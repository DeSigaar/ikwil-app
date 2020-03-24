import * as React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { firebaseManager } from '../utils/firebase'
import { Link } from 'react-router-dom'

interface Props {
  isLoggedIn: boolean
}

const ContentContainer = styled.div``

const Content: React.FC<Props> = (props: Props) => {
  return (
    <ContentContainer>
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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam at dolor
        voluptates odio mollitia, aliquam totam consequatur sunt autem eaque,
        minima, quis cupiditate tempore quas facilis. Quisquam alias adipisci
        est.
      </p>
    </ContentContainer>
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

export default connect(mapStateToProps, mapDispatchToProps)(Content)
