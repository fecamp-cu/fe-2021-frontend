import React from "react"
import { Route, Routes } from "react-router-dom"
import { PageContainer } from "./components/Containers"
import Footer from "./components/Footer/Footer"
import Form from "./components/Form/Form"
import Navbar from "./components/Navbar/Navbar"
import Profile from "./components/Profile_picture/Profile"
import Example from "./pages/Example/Example"
import Payment from "./pages/Payment/Payment"
import PaymentConfirm from "./pages/Payment/PaymentConfirm"
import Product from "./pages/Product/Product"
import { setUpOmise } from "./utils/omise"

function App() {
  setUpOmise()
  return (
    <>
      <Navbar isLogin={true} />
      <PageContainer>
        <Routes>
          <Route path="/" element={<Example />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/footer" element={<Footer />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/form" element={<Form />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="/paymentconfirm" element={<PaymentConfirm />}></Route>
        </Routes>
      </PageContainer>
    </>
  )
}

export default App
