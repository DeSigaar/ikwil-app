import * as React from 'react'
import { withRouter } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'

export interface Props {}

const TermsOfService: React.FC<Props & RouteComponentProps> = (
  props: Props & RouteComponentProps,
) => {
  return (
    <>
      <button onClick={(): void => props.history.push('/')}>Naar home</button>
      <div>
        <h1>Terms Of Service</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit cum
          veritatis sapiente quidem facilis non voluptas nostrum voluptatem,
          modi sit aliquam culpa expedita quibusdam, eveniet corporis sint
          fugiat nulla voluptatum.
        </p>
      </div>
    </>
  )
}

export default withRouter(TermsOfService)
