import styled from "styled-components"
import ConfirmButton from "./ConfirmButton"
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
  handleOnClick: () => Promise<{
    status: number
    errorText: string
  }>
}> = ({ handleOnClick }) => {
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
        <ConfirmButton text="คลิกที่นี่เพื่อขออีเมลยืนยันอีกครั้ง" handleOnClick={handleOnClick} />
      </div>
    </BackgroundContainer>
  )
}
export default Success
