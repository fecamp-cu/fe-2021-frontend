import Axios from "axios"
import { PaymentTypes, PromotionCodeType } from "./enums"

export type GenPromotionCode = {
  type: PromotionCodeType
  isReuseable?: boolean
  expireDate?: Date
  code?: string
  value?: number
}

const client = Axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

const checkout = async (source: object, paymentType: PaymentTypes) => {
  const res = await client.post(`/shop/checkout/${paymentType}`, {
    source,
    email: "admin@samithiwat.info",
    firstName: "someone",
    lastName: "naja",
    tel: "0922501231",
    grade: "m6",
    school: "string",
    address: "string",
    subdistrict: "string",
    district: "string",
    province: "string",
    postcode: "11000",
    basket: [
      {
        productId: 1,
        quantity: 1,
      },
    ],
    promotion_code: "string",
  })
  console.log(res)
}

const checkoutCard = async (token: object, paymentType: PaymentTypes) => {
  const res = await client.post(`/shop/checkout/${paymentType}`, {
    source: token,
    email: "admin@samithiwat.info",
    firstName: "someone",
    lastName: "naja",
    tel: "0922501231",
    grade: "string",
    school: "string",
    address: "string",
    subdistrict: "string",
    district: "string",
    province: "string",
    postcode: "11000",
    basket: [
      {
        productId: 1,
        quantity: 1,
      },
    ],
    promotion_code: "string",
  })
  console.log(res)
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
  checkoutCard,
  genCode,
  verifyCode,
}

export default clientInstance
