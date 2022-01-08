import React from "react"
import { Route, Routes } from "react-router-dom"
import Example from "./pages/Example/Example"
import Navbar from "./components/Navbar/Navbar"
import {MdLaunch} from "react-icons/md"
function App() {
  return (
    <>
    <Navbar isLogin={true}/>
    <Routes>
      <Route path="/" element={<Example/>}></Route>
    </Routes>
    </>
  )
}

export default App
