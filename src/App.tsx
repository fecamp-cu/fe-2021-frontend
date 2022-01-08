import React from "react"
import { Route, Routes } from "react-router-dom"
import Example from "./pages/Example/Example"
import Button from './components/Buttons/Buttons'

function App() {
  return (
    <div className="App">
      <Button typeButton={"loginButton"} typeText={"redOrangeText"} onClick={""}>เข้าสู่ระบบ</Button>
    </div>
  );
}

export default App
