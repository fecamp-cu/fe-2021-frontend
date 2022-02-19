import React, { useEffect, useState } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import { PageContainer } from "./components/Containers"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar"
import Profile from "./components/Profile_picture/Profile"
import Example from "./pages/Example/Example"
import Product from "./pages/Product/Product"
import { getProfile, mockLogin } from "./utils/client"
import { setUpOmise } from "./utils/omise"
import { User } from "./utils/types/common"
import { Menubar } from "./components/Navbar/Menubar"
import useWindowDimensions from "./hooks/useWindowDimension"

function App() {
  const [image, setImage] = useState<File>()
  const [isClicked, setIsClicked] = useState(false)
  const location = useLocation()
  const { width } = useWindowDimensions()
  const [user, setUser] = useState<User>({
    id: 0,
    username: "",
    email: "",
    role: "",
  })

  useEffect(() => {
    // FIXME Remove this when production
    const fetchUser = async () => {
      await mockLogin({
        email: "superadmin@gmail.com",
        password: "adminadmin",
      })
      const profile = await getProfile()
      setUser(profile)
    }
    fetchUser()
  }, [])

  const onChangeImage = (event: any) => {
    const file = event.target.files?.item(0)
    if (file && file.type.substring(0, 5) === "image") {
      setImage(file)
    }
    console.log(file)
  }

  setUpOmise()
  return (
    <>
      <Navbar user={user} path={location.pathname} isClicked={isClicked} setIsClicked={setIsClicked} />
      {isClicked ? <Menubar width={width} /> : null}
      <PageContainer>
        <Routes>
          <Route path="/" element={<Example />}></Route>
          <Route path="/product/:id" element={<Product />}></Route>
          <Route path="/footer" element={<Footer />}></Route>
          <Route path="/profile" element={<Profile onChange={onChangeImage} image={image} preview="" />}></Route>
        </Routes>
      </PageContainer>
    </>
  )
}

export default App
