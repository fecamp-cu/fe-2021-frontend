import React from "react"
import { Route, Routes } from "react-router-dom"
import Example from "./pages/Example/Example"
import Navbar from "./components/Navbar/Navbar"
import Product from "./pages/Product/Product"
import Footer from "./components/Footer/Footer"
import Payment from "./pages/Payment/Payment"
import ProductList from "./components/Product_list/ProductList"
import facebookLogo from "./assets/book_cover.jpg";
import ProductListV2 from "./components/Product_list/ProductListv2"

function click(){
  return
}
function App() {
  return (
    <>
    <Navbar isLogin={true}/>
    <ProductList productImg={facebookLogo} title="เตรียมสอบ PAT 3 วิศวกรรมศาสตร์" price={190.00} shipping={90.00} onClick={click} ></ProductList>
    <ProductListV2 productImg={facebookLogo} title="เตรียมสอบ PAT 3 วิศวกรรมศาสตร์" price={190.00} shipping={90.00} onClick={click} ></ProductListV2>
    <Routes>
      <Route path="/" element={<Example />}></Route>
      <Route path="/product" element={<Product />}></Route>
      <Route path="/payment" element={<Payment />}></Route>
    </Routes>
  

    
    <Footer />
    
    </>
  )
}

export default App