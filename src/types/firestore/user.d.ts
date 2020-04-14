export interface User {
  __deleted: boolean
  id: string
  description?: string
  displayName: string
  email: string
  img: string
  phone?: string
  pushToken?: string
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
