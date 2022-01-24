import Axios from "axios"
import { PaymentTypes, PromotionCodeType } from "./enums"

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

function createCheckoutPayload(source: object, costumerData: costumerData, basket: Basket[], promotionCode?: string): CheckoutPayload {
  const data: CheckoutPayload = {
    source,
    email: costumerData.email,
    firstName: costumerData.firstName,
    lastName: costumerData.lastName,
    tel: costumerData.tel,
    grade: costumerData.grade,
    school: costumerData.school,
    address: costumerData.address,
    subdistrict: costumerData.subdistrict,
    district: costumerData.district,
    province: costumerData.province,
    postcode: costumerData.postcode,
    basket,
  }

  if (costumerData.shippingAddress) {
    data.address = costumerData.shippingAddress
    data.subdistrict = costumerData.shippingSubDistrict
    data.district = costumerData.shippingDistrict
    data.province = costumerData.shippingProvince
    data.postcode = costumerData.shippingPostCode
  }

  if (promotionCode) {
    data.promotionCode = promotionCode
  }

  return data
}

const client = Axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

const checkout = async (source: object, paymentType: PaymentTypes, costumerData: costumerData, basket: Basket[], promotionCode?: string) => {
  const data = createCheckoutPayload(source, costumerData, basket, promotionCode)

  try {
    const res = await client.post(`/shop/checkout/${paymentType}`, data)
    console.log("done")
    console.log(res)
    return res.data
  } catch (err) {
    console.log(err)
  }
}

const genCode = async (
  type: PromotionCodeType,
  setCode: (code: string) => void,
  isReuseable?: boolean,
  expireDate?: Date,
  code?: string,
  value?: number
) => {
  if (!isReuseable) {
    isReuseable = false
  }

  const data: GenPromotionCode = {
    type,
    isReuseable,
  }

  if (expireDate) {
    data.expireDate = expireDate
  }

  if (code) {
    data.code = code
  }

  if (value) {
    data.value = value
  }

  const res = await client.post(`/shop/generate-code`, data)
  setCode(res.data.code)
  console.log(res)
}
const verifyCode = async (code: string) => {
  const res = await client.post(`/shop/verify/${code}`)
  console.log(res)
}

const testAPI = async () => {
  const res = await client.get("/")
  console.log(res)
}

const clientInstance = {
  testAPI,
  checkout,
  genCode,
  verifyCode,
}

export default clientInstance
