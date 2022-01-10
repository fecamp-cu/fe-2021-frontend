import React from "react"
import { Route, Routes } from "react-router-dom"
import Example from "./pages/Example/Example"
import Navbar from "./components/Navbar/Navbar"
import Product from "./pages/Product/Product"

function App() {
  return (
    <>
    <Navbar isLogin={true}/>
    <Routes>
      <Route path="/" element={<Example />}></Route>
      <Route path="/product" element={<Product />}></Route>

    </Routes>
    </>
  )
}

export default App
