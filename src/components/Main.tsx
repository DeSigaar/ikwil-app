import * as React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fireAuth } from 'src/utils/firebase'
import { RootState } from 'src/redux/store'

interface Props {
  isLoggedIn: boolean
}

const ContentContainer = styled.div``

const Content: React.FC<Props> = (props: Props) => {
  return (
    <ContentContainer>
      <div>
        {props.isLoggedIn ? (
          <button onClick={(): unknown => fireAuth.signOut()}>uitloggen</button>
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
const mapStateToProps = (state: RootState, __ownProps: any): Props => {
  return {
    isLoggedIn: !state.firebase.auth.isEmpty,
  }
}

const mapDispatchToProps = (__dispatch: any, __ownProps: any) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)
