import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./Login.css"
import { Button } from "../../components/Buttons/Button"
import { FcGoogle } from "react-icons/fc"
import { AiFillFacebook } from "react-icons/ai"
import { IconContext } from "react-icons/lib"
import { apiClient } from "../../utils/client"
import { useUserContext } from "../../utils/contexts/userContext"

const Login = () => {
  const history = useNavigate()
  const { setUser } = useUserContext()
  const redirectOAuth = (url: string) => {
    window.location.href = url
  }
  const [values, setValues] = useState({
    email: "",
    password: "",
  })
  const onChange = (e: any) => {
    setValues({ ...values, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      await apiClient.postLogin({ ...values })
      const profile = await apiClient.getProfile()
      setUser(profile)
      history("/")
    } catch (error: any) {
      alert(error.response.data.message)
    }
  }

  const resetRequested = {
    email: values.email,
  }

  const handleReset = () => {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (values.email === "") {
      alert("Please fill an email")
    } else if (!values.email.match(validRegex)) {
      alert("Invalid email address!")
    } else {
      apiClient.resetPassword(resetRequested)
    }
  }

  return (
    <div className="logincon">
      <div className="flex items-center justify-center">
        <div className="loginbox px-2 pb-3">
          <h1 className="header">เข้าสู่ระบบ</h1>
          <form className="loginform" id="loginform" onSubmit={handleSubmit}>
            <label className="label">อีเมล</label>
            <input type="email" className="input" id="email" value={values.email} onChange={onChange} required></input>
            <label className="label">รหัสผ่าน</label>
            <input type="password" className="input" id="password" value={values.password} onChange={onChange} required></input>
            <p className="mx-1.5 text-right text-sm text-white" onClick={() => handleReset()}>
              ลืมรหัสผ่าน
            </p>
            <div className="my-1.5 mx-2.5">
              <Button type="submit" form="loginform" bg="white" textColor="#9B2C33" outline={false} shadow>
                เข้าสู่ระบบ
              </Button>
            </div>
          </form>
          <div className="loginwith">
            <hr className="line"></hr>
            <p className="mx-2.5 text-white">เข้าสู่ระบบด้วย</p>
            <hr className="line"></hr>
          </div>
          <div className="loginbutton">
            <Button
              Icon={FcGoogle}
              bg="white"
              outline={false}
              shadow
              width="45"
              height="45"
              className="btn"
              margintop="0"
              marginright="0"
              marginbottom="0"
              marginleft="0"
              onClick={() => apiClient.getGoogle().then((res) => redirectOAuth(res.data))}
            ></Button>
            <div></div>
            <IconContext.Provider value={{ className: "fb-icon" }}>
              <Button
                Icon={AiFillFacebook}
                bg="white"
                outline={false}
                shadow
                width="45"
                height="45"
                className="btn"
                margintop="0"
                marginright="0"
                marginbottom="0"
                marginleft="0"
                onClick={() => apiClient.getFacebook().then((res) => redirectOAuth(res.data))}
              ></Button>
            </IconContext.Provider>
          </div>
          <Link to={"/register"} className="text-white underline underline-offset-1">
            ยังไม่ได้ลงทะเบียนใช่ไหม?
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
