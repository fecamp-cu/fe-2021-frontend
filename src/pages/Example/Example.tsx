import React, { useEffect } from "react"
import "./example.style.css"
import logo from "../../assets/logo.svg"
import AlertButton from "../../components/AlertButton/AlertButton"
import { checkoutCardOmise, PaymentTypes } from "../../utils/checkoutOmise"

const Example = () => {
  useEffect(() => {
    checkoutCardOmise(150, {}, (s) => console.log("ok"), PaymentTypes.eBank)
  }, [])
  return (
    <div className="App">
      <header className="App-header">
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
