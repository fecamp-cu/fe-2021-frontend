import axios from "axios"

export const setUpOmise = () => {
  window.Omise.setPublicKey(process.env.REACT_APP_OMISE_PUBLIC_KEY)
  window.OmiseCard.configure({
    publicKey: process.env.REACT_APP_OMISE_PUBLIC_KEY,
  })
}

const createToken = () => {
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

const createSourceOmise = (amount: number, payType: string, setSource: (source: object) => void) => {
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

const omiseClient = axios.create({
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

const createOmiseToken = async (amount: number, setToken: (token: object) => void) => {
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
  console.log(res.data)
}

const omiseInstance = {
  createSourceOmise,
  createOmiseToken,
}

export default omiseInstance
