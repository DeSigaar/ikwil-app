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
