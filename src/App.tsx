import React from "react"
import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer/Footer"
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
      <Route path="/footer" element={<Footer />}></Route>
    </Routes>
    </>
  )
}

export default App
