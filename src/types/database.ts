export interface Database {
  activities: Activity[]
  categories: Category[]
  meals: Meal[]
  news: Article[]
  organisers: Organiser[]
}

export interface Activity {
  __deleted: boolean
  id: string
  attending: number
  maybeAttending: number
  createdBy: string
  creatorID: string
  category: string
  name: string
  description: string
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

export interface Meal {
  createdBy: string
  creatorID: string
  id: string
  img: string
  ingredients: string
  isActive: boolean
  isHallal: boolean
  isVegan: boolean
  isVegetarian: boolean
  name: string
  price: string
}

export interface Article {
  __deleted: boolean
  createdBy: string
  creatorID: string
  img: string
  text: string
  title: string
}

export interface Organiser {
  __deleted: boolean
  id: string
  createdBy: string
  creatorID: string
  description: string
  name: string
  img: string
  place: string
  availability: Availability
}

export interface Availability {
  mondag: boolean
  tuesday: boolean
  wednesday: boolean
  thursday: boolean
  friday: boolean
  saturday: boolean
  sunday: boolean
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
