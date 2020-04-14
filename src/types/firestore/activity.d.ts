export interface Activity {
  __deleted: boolean
  id: string
  createdBy: string
  creatorID: string
  category: string
  name: string
  description: string
  organisers: string[]
  room: string
  day?: Day
  days?: RepeatDay[]
  attending: number
  maybeAttending: number
}

export interface RepeatDay {
  name: string
  startTime: string
  endTime: string
}

export interface Day {
  date: string
  startTime: string
  endTime: string
}
