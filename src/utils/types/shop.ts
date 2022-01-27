import { PromotionCodeType } from "../enums"

export type GenPromotionCode = {
  type: PromotionCodeType
  isReuseable?: boolean
  expireDate?: Date
  code?: string
  value?: number
}

export type costumerData = {
  firstName: string
  lastName: string
  tel: string
  email: string
  grade: string
  school: string
  address: string
  subdistrict: string
  district: string
  province: string
  postcode: string
  shippingAddress: string
  shippingSubDistrict: string
  shippingDistrict: string
  shippingProvince: string
  shippingPostCode: string
}

export type Basket = {
  productId: number
  quantity: number
}

export type CheckoutPayload = {
  source: object
  email: string
  firstName: string
  lastName: string
  tel: string
  grade: string
  school: string
  address: string
  subdistrict: string
  district: string
  province: string
  postcode: string
  basket: Basket[]
  promotionCode?: string
}
