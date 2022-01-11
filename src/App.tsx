import React from "react"
import { Route, Routes } from "react-router-dom"
import Example from "./pages/Example/Example"
import Navbar from "./components/Navbar/Navbar"
import Product from "./pages/Product/Product"
import Page from "./pages/Profile_page/Profile_page"

function App() {
  return (
    <>
    {/* <Navbar isLogin={true}/>
    <Routes>
      <Route path="/" element={<Example />}></Route>
      <Route path="/product" element={<Product />}></Route>
    </Routes> */}
    <Page/>
    </>
  )
}

export default App