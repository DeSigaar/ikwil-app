import * as React from 'react'

import styled from 'styled-components'
import { colors } from '../utils/styles'

const ActivityContainer = styled.div`
  display: flex;
  align-items: center;
`

const ActivityItem = styled.div`
  width: 60%;
  height: 40px;
  box-shadow: ${colors.shadows.default};
  display: flex;
  align-items: center;
`

interface Props {
  name: string
  // startTime: string
  // endTime: string
  // createdBy: string
  // organisers: object
  // room: string
  // deelnemers: number
  // aanmelden: void
  // misschien: void
  // Afmelden: void
}

const Activity = (props: Props) => {
  return (
    <ActivityContainer>
      <span>11</span>
      <ActivityItem>
        <span>{props.name}</span>
        <button>v</button>
      </ActivityItem>
    </ActivityContainer>
  )
}

export default Activity
