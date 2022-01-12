import React from "react"
import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Example from "./pages/Example/Example"
import Form from "./components/Form/Form"
import Navbar from "./components/Navbar/Navbar"
import Product from "./pages/Product/Product"
import Profile from "./components/Profile_picture/Profile"

function App() {
  return (
    <>
      <Navbar isLogin={true} />
      <Routes>
        <Route path="/" element={<Example />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/footer" element={<Footer />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/form" element={<Form />}></Route>
      </Routes>
    </>

  )
}

export default App
