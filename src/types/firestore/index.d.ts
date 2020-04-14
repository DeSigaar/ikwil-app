export interface FirestoreSchema {
  activities?: Activity
  categories?: Category
  meals?: Meal
  news?: Article
  organisers?: Organiser
  rules?: Rule
  users?: User
}

export interface Firestore {
  activities: Activity[]
  categories: Category[]
  meals: Meal[]
  news: Article[]
  organisers: Organiser[]
  rules: Rule[]
  users: User[]
}

export * from './activity'
export * from './category'
export * from './meal'
export * from './article'
export * from './organiser'
export * from './rule'
export * from './user'
