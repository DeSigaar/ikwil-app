import * as React from 'react'

import styled from 'styled-components'
import { colors } from '../utils/styles'

const ActivityContainer = styled.div`
  display: flex;
  align-items: center;
`

const ActivityItem = styled.div`
  width: 80%;
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
  organisers: string[]
  repeats: boolean
  room: string
  categoryName: string
  when: any //TODO any veranderen
}

const Activity = (props: Props) => {
  {
    console.log(props.when)
  }
  return (
    <ActivityContainer>
      <span>11</span>
      <ActivityItem>
        <p>{props.categoryName}</p>
        <p>{props.name}</p>
        <button>v</button>
      </ActivityItem>
    </ActivityContainer>
  )
}

export default Activity
