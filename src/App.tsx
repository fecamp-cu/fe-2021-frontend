import React from "react"
import { Route, Routes } from "react-router-dom"
import Example from "./pages/Example/Example"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Example />}></Route>
    </Routes>
  )
}

export default App