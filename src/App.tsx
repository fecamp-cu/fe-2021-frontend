import React, { useEffect, useState } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import { PageContainer } from "./components/Containers"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar"
import Profile from "./components/Profile/Profile"
import Product from "./pages/Product/Product"
import { apiClient } from "./utils/client"
import { setUpOmise } from "./utils/omise"
import { User } from "./utils/types/common"
import { Menubar } from "./components/Navbar/Menubar"
import useWindowDimensions from "./hooks/useWindowDimension"
import LandingPage from "./pages/LandingPage"
import { FooterMock } from "./utils/constants/mock.constant"
import ProfileShow from "./pages/Profile/ProfileShow"
import ProfileEdit from "./pages/Profile/ProfileEdit"

function App() {
  const [image, setImage] = useState<File>()
  const location = useLocation()
  const { width } = useWindowDimensions()
  const [isClicked, setIsClicked] = useState(false)
  const [user, setUser] = useState<User>({
    id: 0,
    username: "",
    email: "",
    role: "",
    profile: {
      id: 0,
      firstName: "",
      lastName: "",
      imageUrl: "",
      tel: "",
      grade: "",
      school: "",
      address: "",
      subdistrict: "",
      district: "",
      province: "",
      postcode: "",
    },
  })

  useEffect(() => {
    const fetchUser = async () => {
      // FIXME Remove this when production
      await apiClient.mockLogin({
        email: "superadmin@gmail.com",
        password: "adminadmin",
        // email: "samithiwat2544@gmail.com",
        // password: "Modem2544",
      })
      const profile = await apiClient.getUser()
      setUser(profile)
    }
    fetchUser()
  }, [])

  setUpOmise()
  return (
    <>
      <Navbar width={width} user={user} path={location.pathname} isClicked={isClicked} setIsClicked={setIsClicked} />
      {isClicked ? <Menubar width={width} /> : null}
      <PageContainer>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/product/:id" element={<Product />}></Route>
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
