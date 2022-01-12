import React from "react"
import { Route, Routes } from "react-router-dom"
import Example from "./pages/Example/Example"
import Navbar from "./components/Navbar/Navbar"
import Product from "./pages/Product/Product"
import Footer from "./components/Footer/Footer"
import ProductList from "./components/Product_list/ProductList"
import facebookLogo from "./assets/book_cover.jpg";

function click(){
  return
}
function App() {
  return (
    <>
    <Navbar isLogin={true}/>
    
    {/* <Routes>
      <Route path="/" element={<Example />}></Route>
      <Route path="/product" element={<Product />}></Route>
    </Routes> */}
    <ProductList productImg={facebookLogo} onClick={click} title = "เตรียมสอบ PAT3 ความถนัดทางวิศวกรรมศาสตร์" price="$ 190.00"></ProductList>
    
    <Footer />
    
    </>
  )
}

export default App