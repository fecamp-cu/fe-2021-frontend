import React from "react"
import { Route, Routes } from "react-router-dom"
import Example from "./pages/Example/Example"
import Form from "./components/Form/Form"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Form />}></Route>
    </Routes>
  )
}

export default App
