import { useState } from "react"
import PersonalInfoForm from "../../components/Form/Form"
import "./emailVerify.css"
import styled from "styled-components"
import { Button } from "../../components/Buttons/Button"
import { Link, useNavigate } from "react-router-dom"
import { apiClient } from "../../utils/client"
import emailRequest from "../../assets/images/email_request.svg"
const FirstTime = () => {
  const history = useNavigate()

  return (
    <div className="registercon -mt-10 flex min-h-[calc(100vh-46px)] flex-col pt-6">
      <div className="glass m-auto flex flex-col p-8">
        <img src={emailRequest} alt="email_request" className="mx-auto h-40 w-40" />
        <div className="mx-auto text-xl font-extrabold text-white">ลงทะเบียนสำเร็จ</div>
        {/* <div className="font-Bai mx-auto mb-3 text-[12px] text-white">กรุณาคลิกปุ่มด้านล่างเพื่อขออีเมลล์ยืนยันของคุณ</div>
        <Button bg="white" className="text-sm" textColor="#9B2C33" outline={false} shadow>
          คลิกที่นี่เพื่อขออีเมลล์ยืนยัน
        </Button> 
        
        Commented because there are no api for getting email verification. You can uncomment if that api exists.
        */}
      </div>
    </div>
  )
}

export default FirstTime
