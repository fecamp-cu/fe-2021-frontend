import React from "react"
import logo from "../../assets/logo.svg"
import AlertButton from "../../components/AlertButton/AlertButton"
import { Button } from "../../components/Buttons/Button"
import { default as axiosInstance, default as clientInstance } from "../../utils/client"
import { PaymentTypes, PromotionCodeType } from "../../utils/enums"
import omiseInstance from "../../utils/omise"
import "./example.style.css"

const basket = [{ productId: 1, quantity: 1 }]
const costumerData = {
  email: "admin@samithiwat.dev",
  firstName: "samithiwat",
  lastName: "boonchai",
  tel: "0922501231",
  grade: "mor 5",
  school: "school",
  address: "address",
  subdistrict: "subdistrict",
  district: "district",
  province: "province",
  postcode: "11000",
  shippingAddress: "",
  shippingSubDistrict: "",
  shippingDistrict: "",
  shippingProvince: "",
  shippingPostCode: "",
}

const Example = () => {
  const [token, setToken] = React.useState<object>({})
  const [source, setSource] = React.useState<object>({})
  const [code, setCode] = React.useState<string>("")
  return (
    <div className="App">
      <header className="App-header">
        <Button shadow={false} outline={false} onClick={() => omiseInstance.createOmiseToken(10000, setToken)}>
          Create Token
        </Button>
        <Button shadow={false} outline={false} onClick={() => console.log(token)}>
          Check Token
        </Button>
        <Button shadow={false} outline={false} onClick={() => axiosInstance.checkout(token, PaymentTypes.cardEndpoint, costumerData, basket)}>
          Send Token to Backend
        </Button>
        <Button shadow={false} outline={false} onClick={() => omiseInstance.createSourceOmise(10000, "promptpay", setSource)}>
          Promptpay Source
        </Button>
        <Button shadow={false} outline={false} onClick={() => console.log(source)}>
          Check Source
        </Button>
        <Button shadow={false} outline={false} onClick={() => axiosInstance.checkout(source, PaymentTypes.promptPayEndpoint, costumerData, basket)}>
          Send Source to Backend
        </Button>
        <Button shadow={false} outline={false} onClick={() => omiseInstance.createSourceOmise(10000, "internet_banking_scb", setSource)}>
          Internet Banking Source
        </Button>
        <Button shadow={false} outline={false} onClick={() => console.log(source)}>
          Check Source
        </Button>
        <Button
          shadow={false}
          outline={false}
          onClick={async () => {
            const res = await axiosInstance.checkout(source, PaymentTypes.eBankEndpoint, costumerData, basket)
            window.open(res.authorize_uri, "_blank")
          }}
        >
          Send Source to Backend
        </Button>
        <Button shadow={false} outline={false} onClick={() => axiosInstance.testAPI()}>
          Test
        </Button>
        <Button shadow={false} outline={false} onClick={() => axiosInstance.genCode(PromotionCodeType.AMOUNT, setCode)}>
          Generate Code Amount
        </Button>
        <Button shadow={false} outline={false} onClick={() => axiosInstance.genCode(PromotionCodeType.PERCENTAGE, setCode)}>
          Generate Code Percentage
        </Button>
        <Button shadow={false} outline={false} onClick={() => console.log(code)}>
          Check Code
        </Button>
        <Button shadow={false} outline={false} onClick={() => axiosInstance.verifyCode(code)}>
          Verify Code
        </Button>
        <br />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <AlertButton isEmergency message="This is just a proposed project structure, feel free to change it if you want">
          Example Button
        </AlertButton>
        <Button shadow={false} outline={false} onClick={() => clientInstance.testAPI()}>
          Test
        </Button>
      </header>
    </div>
  )
}

export default Example
// TODO: Delete this before production
// This is just a proposed project structure, feel free to change it if you want
