import { Customer } from "./shop"

export type PagePath = {
  name: string
  link: string
}

export interface WindowDimensions {
  width: number
  height: number
}

export interface Credentials {
  accessToken: string
  refreshToken: string
  expiresIn: number
}

export interface User {
  id: number
  username: string
  email: string
  role: string
  profile: Profile
  customer?: Customer
}

export interface Profile {
  id: number
  firstName: string
  lastName: string
  imageUrl: string
  tel: string
  grade: string
  school: string
  address: string
  subdistrict: string
  district: string
  province: string
  postcode: string
}
