import React from "react"
import { Route, Routes } from "react-router-dom"
import Example from "./pages/Example/Example"
import Navbar from "./components/Navbar/Navbar"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar isLogin={true} hasDropdown={true} atPage={"home"}/>}></Route>
      
    </Routes>
   
  )
}

export default App
