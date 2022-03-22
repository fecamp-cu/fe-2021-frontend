import React, { useEffect } from "react"
import "./example.style.css"
import logo from "../../assets/logo.svg"
import AlertButton from "../../components/AlertButton/AlertButton"
import { createOmiseToken, createSourceOmise } from "../../utils/omise"

import axiosInstance from "../../utils/client"
import { Button } from "../../components/Buttons/Button"
import { PaymentTypes, PromotionCodeType } from "../../utils/enums"

const Example = () => {
  const [token, setToken] = React.useState<object>({})
  const [source, setSource] = React.useState<object>({})
  const [code, setCode] = React.useState<string>("")
  return (
    <div className="App">
      <header className="App-header">
        <Button shadow={false} outline={false} onClick={() => createOmiseToken(10000, setToken)}>
          Create Token
        </Button>
        <Button shadow={false} outline={false} onClick={() => console.log(token)}>
          Check Token
        </Button>
        {/* <Button shadow={false} outline={false} onClick={() => axiosInstance.checkoutCard(token, PaymentTypes.cardEndpoint)}>
          Send Token to Backend
        </Button> */}
        <Button shadow={false} outline={false} onClick={() => createSourceOmise(10000, "promptpay", setSource)}>
          Promptpay Source
        </Button>
        <Button shadow={false} outline={false} onClick={() => console.log(source)}>
          Check Source
        </Button>
        <Button shadow={false} outline={false} onClick={() => axiosInstance.checkout(source, PaymentTypes.promptPayEndpoint)}>
          Send Source to Backend
        </Button>
        <Button shadow={false} outline={false} onClick={() => createSourceOmise(10000, "internet_banking_scb", setSource)}>
          Internet Banking Source
        </Button>
        <Button shadow={false} outline={false} onClick={() => console.log(source)}>
          Check Source
        </Button>
        <Button shadow={false} outline={false} onClick={() => axiosInstance.checkout(source, PaymentTypes.eBankEndpoint)}>
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
      </header>
    </div>
  )
}

export default Example
// TODO: Delete this before production
// This is just a proposed project structure, feel free to change it if you want
