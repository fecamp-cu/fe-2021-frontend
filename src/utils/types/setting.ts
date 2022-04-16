export interface Setting {
  id: number
  isActive: boolean
  title: string
  youtube : YouTube
  registerFormUrl: string
  photoPreviews: PhotoPreviewContainer[]
  qualificationPreviews: QualificationPreview[]
  sponcerContainers: SponsorContainer[]
  timelineEvents: TimelineEvent[]
  aboutFeContainers: AboutFeContainer[]
  announcements : Announcement[]
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

export interface YouTube{
  url : string,
  title : string,
  thumbnail : string,
  duration : string,
  likes : string,
  views : string,
  publishDate : string
}

export interface Announcement {
  id : number,
  dateStart : string,
  dateEnd : string,
  header : string,
  description : string,
  order : number
}