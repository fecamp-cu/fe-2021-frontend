import { PRODUCT_TYPE } from "../enums"
import { PaymentMethod, Status } from "../enums/shop.enum"

export interface Customer {
  id: number
  firstname: string
  lastname: string
  email: string
  tel: string
  grade: string
  school: string
  address: string
  subdistrict: string
  district: string
  province: string
  postcode: string
  point: number
  orders: Order[]
}

export interface Order {
  id: number
  paymentMethod: PaymentMethod
  status: Status
  paidAt: string
  items: ItemTransition[]
}

export interface ItemTransition {
  id: number
  quantity: number
  item: Item
}

export interface Item {
  id: number
  type: PRODUCT_TYPE
  thumbnail: string
  fileURL: string
  price: number
  quantityInStock: number
  title: string
  summary: string
  author: string
}
