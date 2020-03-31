import * as React from 'react'

interface Props {
  closeToast?: any // eslint-disable-line @typescript-eslint/no-explicit-any
}

const Toast: React.FC<Props> = (props: Props) => {
  return (
    <>
      <h4>Titel</h4>
      <small onClick={props.closeToast}>Sluiten</small>
    </>
  )
}

export default Toast
