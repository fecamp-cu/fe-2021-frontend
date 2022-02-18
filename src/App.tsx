import React, { useState } from "react"
import { Route, Routes } from "react-router-dom"
import Example from "./pages/Example/Example"
import Form from "./components/Form/Form"
import Navbar from "./components/Navbar/Navbar"
import Product from "./pages/Product/Product"
import Footer from "./components/Footer/Footer"
import { PageContainer } from "./components/Containers"
import ProfilePictureEdit from "./components/ProfilePicture/ProfilePictureEdit"
import { setUpOmise } from "./utils/omise"



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
          <Route path="/ProfilePicture" element={<ProfilePictureEdit onChange={onChangeImage} image={image} preview=""/>}></Route>
        </Routes>
      </PageContainer>
    </>
  )
}

export default App
function setValues(arg0: any) {
  throw new Error("Function not implemented.")
}

