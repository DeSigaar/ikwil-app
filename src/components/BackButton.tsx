import * as React from 'react'

interface Props {
  back: any
}

const BackButton: React.FC<Props> = (props: Props) => {
  return <button onClick={props.back}>Terug</button>
}

export default BackButton
