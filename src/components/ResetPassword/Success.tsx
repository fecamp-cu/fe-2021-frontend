import styled from "styled-components"
import ConfirmButton from "../ForgotPassword/ConfirmButton"
import CheckSvg from "./CheckSvg"
import "../../pages/ResetPassword/ResetPassword.css"
import "./Success.css"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Title = styled.div`
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 1.25rem;
  }

  @media (max-width: 320px) {
    font-size: 1rem;
  }
  font-size: 1.5rem;
`

const Body = styled.div`
  @media (max-width: 320px) {
    font-size: 0.8rem;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 0.9rem;
  }
  font-size: 18px;
`

const Success: React.FC = () => {
  // return
  const [timeShow, setTimeShow] = useState<number>(5)
  const navigate = useNavigate()

  useEffect(() => {
    if (timeShow > 0){
        const timer = setTimeout(() => {
            setTimeShow((prevTime) => prevTime - 1)
          }, 1000)
          return () => {
            clearTimeout(timer)
          }
    }
    else{
        navigate("/login");
    }
  }, [timeShow,navigate])
  const handleOnClick = () => {
    navigate("/login")
  }

  return (
    <div className="logincon">
      <div className="box">
        <div className="checkedBox">
          <CheckSvg />
          <Title>รีเซ็ตรหัสผ่านสำเร็จ</Title>
          <ConfirmButton text={`กลับสู่หน้าหลัก (${timeShow})`} handleOnClick={handleOnClick} />
        </div>
      </div>
    </div>
  )
}
export default Success
