export const checkoutOmise = (amount: number) => {
  window.OmiseCard.open({
    amount: amount * 100,
    currency: "THB",
    defaultPaymentMethod: "credit_card",
    onCreateTokenSuccess: (nonce: string) => {
      //console.log(nonce)
      // api calls
    },
  })
}
