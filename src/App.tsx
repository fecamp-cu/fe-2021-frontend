import React, { useEffect, useState } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import { PageContainer } from "./components/Containers"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar"
import Product from "./pages/Product/Product"
import { apiClient } from "./utils/client"
import { setUpOmise } from "./utils/omise"
import { User } from "./utils/types/common"
import useWindowDimensions from "./hooks/useWindowDimension"
import LandingPage from "./pages/LandingPage"
import { useUserContext } from "./utils/contexts/userContext"
import { FooterMock } from "./utils/constants/mock.constant"
import ProfileShow from "./pages/Profile/ProfileShow"
import ProfileEdit from "./pages/Profile/ProfileEdit"
import Register from "./pages/Register/Register"
import Login from "./pages/Login/Login"

function App() {
  const location = useLocation()
  const { user, setUser } = useUserContext()
  const { width } = useWindowDimensions()
  const [isClicked, setIsClicked] = useState(false)

  useEffect(() => {
    const fetchUser = async () => {
      const profile = await apiClient.getProfile()
      setUser(profile)
    }

    window.gtag("config", "G-XKLCNLPQJZ", {
      page_path: location.pathname,
      page_title: location.pathname,
    })

    fetchUser()
  }, [])

  setUpOmise()
  return (
    <>
      <Navbar width={width} user={user} path={location.pathname} isClicked={isClicked} setIsClicked={setIsClicked} />
      <PageContainer>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/product/:id" element={<Product />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/profile" element={<ProfileShow user={user} setUser={setUser} />}></Route>
          <Route path="/profile/edit" element={<ProfileEdit user={user} setUser={setUser} />}></Route>
        </Routes>
      </PageContainer>
      <Footer
        address={FooterMock.address}
        name={FooterMock.name}
        copyright={FooterMock.copyright}
        facebookUrl={FooterMock.facebookUrl}
        youtubeUrl={FooterMock.youtubeUrl}
        instagramUrl={FooterMock.instagramUrl}
      />
    </>
  )
}

export default App
