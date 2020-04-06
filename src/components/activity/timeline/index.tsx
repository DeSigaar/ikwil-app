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
  status?: string
}

const Timeline: React.FC<Props> = (props: Props) => {
  const { displayDay, displayMonth, startDateTime, first, status } = props
  const month = getShortMonthByNumber(startDateTime.getMonth())
  const day = getShortDayByNumber(startDateTime.getDay())
  let dot: React.ReactNode

  switch (status) {
    default:
      dot = <StyledEmptyDot />
      break
    case 'ATTENDING':
      dot = (
        <StyledYesDot>
          <i className="gg-check"></i>
        </StyledYesDot>
      )
      break
    case 'MAYBE_ATTENDING':
      dot = (
        <StyledMaybeDot>
          <small>?</small>
        </StyledMaybeDot>
      )
      break
    case 'NOT_ATTENDING':
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
