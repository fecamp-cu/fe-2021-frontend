import Axios from "axios"
import { PaymentTypes } from "./enums"

export const client = Axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

export const checkout = async (source: object, paymentType: PaymentTypes) => {
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

export const checkoutCard = async (token: object, paymentType: PaymentTypes) => {
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

export const verifyCode = async (token: object, code: string) => {
  const res = await client.post(`/shop/verify/${code}`, {
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

export const testAPI = async () => {
  const res = await client.get("/")
  console.log(res)
}
