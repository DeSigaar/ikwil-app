import { RouteComponentProps } from 'react-router-dom'
import { Organiser, Activity, Registration } from 'src/types/firestore'

export interface StyledActivityItemProps {
  toggle: boolean
  inverted: boolean
  backgroundColor: string
  first: boolean
}

export interface StyledToggleStyleProps {
  toggle: boolean
}

export interface StyledActiveStyleProps {
  yes?: boolean
  maybe?: boolean
  no?: boolean
  categoryColor: string
  notActive?: boolean
}

export interface StyledDetailStyleProps {
  size: number
}

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
