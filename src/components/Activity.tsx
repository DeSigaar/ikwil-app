import * as React from 'react'

import styled from 'styled-components'
import { colors } from '../utils/styles'

const ActivityContainer = styled.div`
  display: flex;
  align-items: center;
`

const ActivityItem = styled.div<StyleProps>`
  width: 80%;
  height: ${({ toggle }) => (toggle ? '200px' : '40px')};
  transition: 0.2s;
  box-shadow: ${colors.shadows.default};
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`

const ActivityBar = styled.div`
  width: 100%;
`

const Details = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: unset;
`
const Line = styled.hr`
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  border-width: 1px;
  width: 70%;
`
const Buttons = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
`

const Detail = styled.li`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

interface StyleProps {
  toggle: boolean
}

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
  const [toggle, setToggle] = React.useState(false)

  {
    console.log(props)
    console.log(toggle)
  }
  return (
    <ActivityContainer>
      <span></span>
      <ActivityItem toggle={toggle}>
        <ActivityBar>
          <span>{props.categoryName}</span>
          <span>{props.name}</span>
          <button onClick={(): void => setToggle(!toggle)}>v</button>
        </ActivityBar>

        {toggle && (
          <>
            <Details>
              <Detail>
                <span>i</span> {props.room}
              </Detail>
              <Detail>
                <span>i</span> {props.room}
              </Detail>
              <Detail>
                <span>i</span> {props.room}
              </Detail>
              <Detail>
                <span>i</span> {props.room}
              </Detail>
            </Details>
            <Line />
            <Buttons>
              <button>Ja</button>
              <button>Misschien</button>
              <button>Nee</button>
            </Buttons>
          </>
        )}
      </ActivityItem>
    </ActivityContainer>
  )
}

export default Activity
