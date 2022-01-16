import { AxiosResponse } from "axios"
import { client } from "./client"
export enum PaymentTypes {
  eBank = "internet_banking",
  card = "credit_card",
  promptPay = "promptpay",
}
export const setUpOmise = () => {
  window.Omise.setPublicKey(process.env.REACT_APP_OMISE_PUBLIC_KEY)
  window.OmiseCard.configure({
    publicKey: process.env.REACT_APP_OMISE_PUBLIC_KEY,
  })
}
export const checkoutCardOmise = (amount: number, order: any, onCheckoutSuccess: (res: AxiosResponse) => void, payType: PaymentTypes) => {
  window.OmiseCard.open({
    amount: amount,
    currency: "THB",
    defaultPaymentMethod: payType,
    otherPaymentMethods: "internet_banking,promptpay,credit_card",
    onCreateTokenSuccess: async (nonce: string) => {
      order.token = nonce
      try {
        const res = await client.post("/shop/checkout", order)
        onCheckoutSuccess(res)
      } catch (err) {
        //handle error
      }
    },
  })
}
