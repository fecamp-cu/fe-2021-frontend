export type Setting = {
  id: number
  title: string
  youtubeUrl: string
  registerFormUrl: string
  isActive: boolean
  aboutFeContainers: AboutFe[]
  photoPreviews: Photo[]
  qualificationPreviews: Qualification[]
  sponcerContainers: Sponsor[]
  timelineEvents: Timeline[]
}

export type Photo = {
  id: number
  order: number
  imgUrl: string
}

export type AboutFe = {
  id: number
  order: number
  text: string
}

export type Qualification = {
  id: number
  order: number
  text: string
}

export type Sponsor = {
  id: number
  order: number
  imgUrl: string
}

export type Timeline = {
  id: number
  text: string
  eventStartDate: Date
  eventEndDate: Date
}
