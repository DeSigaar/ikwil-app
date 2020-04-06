import * as React from 'react'
import {
  StyledTimeline,
  StyledDate,
  StyledLine,
  StyledDot,
  StyledEmptyDot,
  StyledYesDot,
  StyledMaybeDot,
  StyledNoDot,
} from './styles'
import {
  isToday,
  getShortMonthByNumber,
  getShortDayByNumber,
} from 'src/utils/date'

interface Props {
  displayDay: boolean
  displayMonth: boolean
  startDateTime: Date
  first: boolean
}

const Timeline: React.FC<Props> = (props: Props) => {
  const { displayDay, displayMonth, startDateTime, first } = props
  const month = getShortMonthByNumber(startDateTime.getMonth())
  const day = getShortDayByNumber(startDateTime.getDay())
  let dot: React.ReactNode

  // Because there is no attending state, just randomize
  // TODO: Change this to actual value
  switch (Math.floor(Math.random() * 4)) {
    default:
    case 0:
      dot = <StyledEmptyDot />
      break
    case 1:
      dot = (
        <StyledYesDot>
          <i className="gg-check"></i>
        </StyledYesDot>
      )
      break
    case 2:
      dot = (
        <StyledMaybeDot>
          <small>?</small>
        </StyledMaybeDot>
      )
      break
    case 3:
      dot = (
        <StyledNoDot>
          <i className="gg-close"></i>
        </StyledNoDot>
      )
      break
  }

  return (
    <StyledTimeline>
      <StyledDate first={first} isToday={isToday(startDateTime)}>
        {displayMonth && <p className="month">{month}</p>}
        {displayDay && (
          <>
            <p className="date">{startDateTime.getDate()}</p>
            <p className="day">{day}</p>
          </>
        )}
      </StyledDate>

      <StyledLine />

      <StyledDot first={first}>{dot}</StyledDot>
    </StyledTimeline>
  )
}

export default Timeline
