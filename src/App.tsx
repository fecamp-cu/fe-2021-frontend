import React, { useState } from "react"
import { Route, Routes } from "react-router-dom"
import Example from "./pages/Example/Example"
import Form from "./components/Form/Form"
import Navbar from "./components/Navbar/Navbar"
import Product from "./pages/Product/Product"
import Footer from "./components/Footer/Footer"
import { PageContainer } from "./components/Containers"
import Profile from "./components/Profile_picture/Profile"
import { setUpOmise } from "./utils/omise"
import Profile_show from "./pages/Profile_page/Profile_show"
import Profile_edit from "./pages/Profile_page/Profile_edit"



function App() {
  const [image, setImage] = useState<File>();

  const onChangeImage = (event:any) => {
    const file = event.target.files?.item(0);
    if(file && file.type.substring(0,5) == "image"){
      setImage(file);
    } 
    console.log(file);
  }

  setUpOmise()
  return (
    <>
      <Navbar isLogin={true} />
      <PageContainer>
        <Routes>
          <Route path="/" element={<Example />}></Route>
          <Route path="/product/:id" element={<Product />}></Route>
          <Route path="/footer" element={<Footer />}></Route>
          {/* <Route path="/form" element={<Form />}></Route> */}
          <Route path="/Profile_show" element={<Profile_show />}></Route>
          <Route path="/Profile_edit" element={<Profile_edit />}></Route>
          <Route path="/profile" element={<Profile onChange={onChangeImage} image={image} preview=""/>}></Route>
        </Routes>
      </PageContainer>
    </>
  )
}

export default App
function setValues(arg0: any) {
  throw new Error("Function not implemented.")
}

