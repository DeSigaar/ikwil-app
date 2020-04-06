export interface Activity {
  __deleted: boolean
  id: string
  createdBy: string
  creatorID: string
  category: string
  name: string
  organisers: string[]
  room: string
  day?: Day
  days?: RepeatDay[]
}

export interface Category {
  __deleted: boolean
  id: string
  bio: string
  color: string
  icon: string
  name: string
}

export interface Organiser {
  __deleted: boolean
  id: string
  createdBy: string
  creatorID: string
  description: string
  isAvaible: boolean
  name: string
  place: string
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

export interface Registration {
  activity: string
  date: RegistrationDate
  status: string
}

export interface RegistrationDate {
  seconds: number
  nanoseconds: number
}
