import React from "react"
import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Example from "./pages/Example/Example"
import Navbar from "./components/Navbar/Navbar"
import Product from "./pages/Product/Product"
import Profile from "./components/Profile_picture/Profile"
import {Button} from "./components/Buttons/Button"
import { IoMdBasket } from 'react-icons/io';
import ApplyButton from "./components/Buttons/ApplyButton"

function App() {
  return (
    <>
      <Navbar isLogin={true} />
      <Button width="433" bg="white" textColor="linear-gradient(93.44deg, #af3b43 100%, #ea727f 100%)" outline={false} shadow>เข้าสู่ระบบ</Button>
      
      <Button width="335" bg="white" textColor="linear-gradient(93.44deg, #af3b43 100%, #ea727f 100%)" outline={false} shadow>ลงทะเบียน</Button>
      
      <Button width="335" textColor="white" outline shadow={false}>ยกเลิก</Button>
      
      <Button width="395" textColor="white" outline shadow={false}>ดูตัวอย่างหนังสือ</Button>
      
      <Button width="395" bg="#AB3A41" textColor="white" outline={false} shadow icon={<IoMdBasket/>} fontWeight="Normal">เพิ่มลงตะกร้า</Button>
      
      <Button width="809" bg="white" textColor="linear-gradient(93.44deg, #af3b43 100%, #ea727f 100%)" outline={false} shadow>ลงทะเบียน</Button>
      
      <Button width="809" outline shadow={false}>ดูตัวอย่างข้อสอบ</Button>
      
      <Button width="454" bg="white" textColor="linear-gradient(93.44deg, #af3b43 100%, #ea727f 100%)" outline={false} shadow>ยืนยันและไปชำระเงิน</Button>
      
      <Button width="71" bg="#D45161" fontSize="16px" lineHeight="24px" outline={false} shadow>ใช้โค้ด</Button>
      
      <Button width="207" textColor="white" outline shadow={false}>ไปหน้าข้อมูลผู้ใช้</Button>
      
      <Button width="207" bg="white" textColor="linear-gradient(93.44deg, #af3b43 100%, #ea727f 100%)" outline={false} shadow>กลับหน้าหลัก</Button>
      
      <ApplyButton></ApplyButton>
      {/* <Routes>
        <Route path="/" element={<Example />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/footer" element={<Footer />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes> */}
    </>
  )
}

export default App
