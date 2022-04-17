import styled from "styled-components"
import TimerConfirmButton from "./TimerConfirmButton"
import EmailSvg from "./EmailSvg"
import "../../pages/ResetPassword/ResetPassword.css"
import "./Success.css"
import BackgroundContainer from "../ResetPassword/common/BackgroundContainer"

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

const Success: React.FC<{
  handleOnSubmit: () => Promise<{
    status: number
    errorText: string
  }>
}> = ({ handleOnSubmit }) => {
  // return

  return (
    <BackgroundContainer>
      <div className="successBox">
        <EmailSvg />
        <div className="successText">
          <Title>ส่งคำขอเปลี่ยนรหัสผ่านไปทางอีเมลแล้ว</Title>
          <Body>คุณสามารถเช็คในอีเมลเพื่อรีเซ็ตรหัสผ่านได้</Body>
          <Body>หากไม่ได้รับอีเมลยืนยัน กรุณาคลิกปุ่มด้านล่างอีกครั้ง</Body>
        </div>
        <TimerConfirmButton textBeforeClick="คลิกที่นี่เพื่อขออีเมลยืนยันอีกครั้ง" textAfterClick="กรุณารอสักครู่เพื่อส่งคำขออีกครั้ง" handleOnSubmit={handleOnSubmit} />
      </div>
    </BackgroundContainer>
  )
}
export default Success
