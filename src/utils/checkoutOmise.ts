import { AxiosResponse } from "axios"
import { client } from "./client"
export const checkoutOmise = (amount: number, order: any, onCheckoutSuccess: (res: AxiosResponse) => void) => {
  window.OmiseCard.open({
    amount: amount * 100,
    currency: "THB",
    defaultPaymentMethod: "credit_card",
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
