import React from "react"
import { Route, Routes } from "react-router-dom"
import Example from "./pages/Example/Example"
import Navbar from "./components/Navbar/Navbar"
import Product from "./pages/Product/Product"
import Footer from "./components/Footer/Footer"
import Payment from "./pages/Payment/Payment"
import ProductList from "./components/Product_list/ProductList"
import facebookLogo from "./assets/book_cover.jpg";
import PaymentConfirm from "./pages/Payment/PaymentConfirm"

function App() {
  return (
    <>
    <Navbar isLogin={true}/>
    <Routes>
      <Route path="/" element={<Example />}></Route>
      <Route path="/product" element={<Product />}></Route>
      <Route path="/payment" element={<Payment />}></Route>

      <Route path="/paymentconfirm" element={<PaymentConfirm />}></Route>
    </Routes>
  

    
    <Footer />
    
    </>
  )
}

export default App