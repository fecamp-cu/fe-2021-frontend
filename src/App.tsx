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
import ProductListV2 from "./components/Product_list/ProductListv2"
import {Book} from "./components/Product_list/ProductListv2"


const book:Book[] = [
  {productId:1,title:'เตรียมสอบ PAT 3 ความถนัดทางวิศวกรรมศาสตร์',price: 15,productImg: facebookLogo},
  {productId:2,title:'เตรียมสอบ PAT 3 ความถนัดทางวิศวกรรมศาสตร์',price: 15,productImg: facebookLogo},
  {productId:3,title:'เตรียมสอบ PAT 3 ความถนัดทางวิศวกรรมศาสตร์',price: 15,productImg: facebookLogo}
]

function App() {
  return (
    <>
    <Navbar isLogin={true}/>
    <ProductListV2 bookList={book}></ProductListV2>
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