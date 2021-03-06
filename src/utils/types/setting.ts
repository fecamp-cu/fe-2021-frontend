export interface Setting {
  id: number
  isActive: boolean
  title: string
  youtubeUrl: string
  registerFormUrl: string
  photoPreviews: PhotoPreviewContainer[]
  qualificationPreviews: QualificationPreview[]
  sponcerContainers: SponsorContainer[]
  timelineEvents: TimelineEvent[]
  aboutFeContainers: AboutFeContainer[]
}

export interface AboutFeContainer {
  id: number
  order: number
  text: string
}

export interface PhotoPreviewContainer {
  id: number
  order: number
  imgUrl: string
}

export interface QualificationPreview {
  id: number
  order: number
  text: string
}

export interface SponsorContainer {
  id: number
  order: number
  imgUrl: string
}

export interface TimelineEvent {
  id: number
  eventStartDate: string
  eventEndDate: string
  text: string
}
