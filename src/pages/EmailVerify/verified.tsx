import { useEffect, useState } from "react"
import PersonalInfoForm from "../../components/Form/Form"
import "./emailVerify.css"
import styled from "styled-components"
import { Button } from "../../components/Buttons/Button"
import { useSearchParams, useNavigate } from "react-router-dom"
import { apiClient } from "../../utils/client"
import verified from "../../assets/images/verified.svg"

const FirstTime = () => {
  const history = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const [countdown, setCountDown] = useState(5)
  const token = searchParams.get("token")
  const userId = searchParams.get("userId")
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>
    ;(async () => {
      if (userId && token) {
        await apiClient.verifyEmail(token, userId)
        interval = setInterval(() => {
          if (countdown > 0) {
            setCountDown(countdown - 1)
          } else {
            clearInterval(interval)
            history("/")
          }
        }, 1000)
      }
    })()
    return () => clearInterval(interval)
  }, [countdown])
  return (
    <div className="registercon -mt-10 flex min-h-[calc(100vh-46px)] flex-col pt-6">
      <div className="glass m-auto flex flex-col p-8 px-16">
        <img src={verified} alt="email_request" className="mx-auto h-40 w-40" />
        <div className="mx-auto text-xl font-extrabold text-white">ยืนยันอีเมลล์สำเร็จ</div>
        <Button onClick={() => history("/")} bg="white" className="text-sm" textColor="#9B2C33" outline={false} shadow>
          กลับสู่หน้าหลัก ({countdown})
        </Button>
      </div>
    </div>
  )
}

export default FirstTime
