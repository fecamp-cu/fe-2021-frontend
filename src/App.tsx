import React from "react"
import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Example from "./pages/Example/Example"
import Product from "./pages/Product/Product"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Example />}></Route>
      <Route path="/product" element={<Product />}></Route>
      <Route path="/footer" element={<Footer />}></Route>
    </Routes>
  )
}

export default App
