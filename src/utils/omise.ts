// import { AxiosResponse } from "axios"
import axios, { AxiosResponse } from "axios"
import client from "./client"
import { PaymentMethod } from "./enums/shop.enum"
import { PaymentOption } from "./types/shop"

export const setUpOmise = () => {
  window.Omise.setPublicKey(process.env.REACT_APP_OMISE_PUBLIC_KEY)
  window.OmiseCard.configure({
    publicKey: process.env.REACT_APP_OMISE_PUBLIC_KEY,
  })
}

export const createToken = () => {
  window.Omise.tokens.create(
    {
      card: {
        name: "JOHN DOE",
        city: "Bangkok",
        postal_code: 10320,
        number: "4242424242424242",
        expiration_month: 2,
        expiration_year: 2022,
        security_code: 123,
      },
    },
    function (error: any, token: string) {
      /* Response. */
      console.log(token)
    }
  )
}
export const checkoutWithOmise = (amount: number, onCreateTokenSuccess: (nonce: string) => void, payType: PaymentMethod) => {
  window.OmiseCard.open({
    amount: amount * 100,
    currency: "THB",
    defaultPaymentMethod: payType,
    otherPaymentMethods: "internet_banking,promptpay,credit_card",
    onCreateTokenSuccess: onCreateTokenSuccess,
  })
}
export const createSourceOmise = (amount: number, payType: string, setSource: (source: object) => void) => {
  window.Omise.createSource(
    payType,
    {
      amount: amount,
      currency: "THB",
      email: "samithiwat2544@gmail.com",
      name: "samithiwat",
      phone_number: "0922501231",
    },
    function (statusCode: number, response: any) {
      setSource(response)
    }
  )
}

export const omiseClient = axios.create({
  baseURL: "https://vault.omise.co",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Method": "GET, POST, OPTION",
  },
  auth: {
    username: process.env.REACT_APP_OMISE_PUBLIC_KEY as string,
    password: "",
  },
  // withCredentials: true,
})

export const createOmiseToken = async (amount: number, setToken: (token: object) => void) => {
  const res = await omiseClient.post("/tokens", {
    card: {
      name: "JOHN DOE",
      city: "Bangkok",
      postal_code: "10320",
      number: "4242424242424242",
      expiration_month: 2,
      expiration_year: 2022,
      security_code: 123,
    },
  })
  res.data.amount = amount
  setToken(res.data)
}

export const getPaymentOption = (method: PaymentMethod): PaymentOption => {
  if (method.slice(0, 8) === "internet") {
    const bank = method.split("_")[2]
    return {
      type: "internet-banking",
      bank: bank,
    }
  }
  if (method === PaymentMethod.CREDIT_CARD)
    return {
      type: "credit-card",
    }
  return { type: method }
}
