import React from "react"
import { Route, Routes } from "react-router-dom"
import Example from "./pages/Example/Example"
import Form from "./components/Form/Form"
import Navbar from "./components/Navbar/Navbar"
import Product from "./pages/Product/Product"
import Footer from "./components/Footer/Footer"
import { PageContainer } from "./components/Containers"
import Profile from "./components/Profile_picture/Profile"
import { setUpOmise } from "./utils/omise"
import LandingPage from "./pages/LandingPage/LandingPage"

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
          <Route path="/landingPage" element={<LandingPage />}></Route>
        </Routes>
      </PageContainer>
    </>
  )
}

export default App
