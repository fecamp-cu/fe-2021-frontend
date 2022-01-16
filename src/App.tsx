import React, { useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Example from "./pages/Example/Example"
import Navbar from "./components/Navbar/Navbar"
import Product from "./pages/Product/Product"
import Profile from "./components/Profile_picture/Profile"
import { setUpOmise } from "./utils/checkoutOmise"

function App() {
  useEffect(() => {
    setUpOmise()
  }, [])
  return (
    <>
      <Navbar isLogin={true} />
      <Routes>
        <Route path="/" element={<Example />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/footer" element={<Footer />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </>
  )
}

export default App
