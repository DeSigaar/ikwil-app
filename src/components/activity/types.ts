import { RouteComponentProps } from 'react-router-dom'
import { Organiser, Activity, Registration } from 'src/types/firestore'

export interface Props extends Activity, RouteComponentProps {
  organisers: string[]
  allOrganisers: Organiser[]
  categoryName: string
  categoryColor: string
  startDateTime: Date
  endDateTime: Date
  displayDay: boolean
  displayMonth: boolean
  isLoggedIn: boolean
  i: number
  registration?: Registration
}

export interface StyledItemProps {
  toggle: boolean
  inverted: boolean
  backgroundColor: string
  first: boolean
}

export interface StyledToggleProps {
  toggle: boolean
}

export interface StyledActiveProps {
  yes?: boolean
  maybe?: boolean
  no?: boolean
  categoryColor: string
  notActive?: boolean
}

export interface StyledDetailProps {
  size: number
}
