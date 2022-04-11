import styled from "styled-components"
import ConfirmButton from "../ForgotPassword/ConfirmButton"
import CheckSvg from "./CheckSvg"
import "../../pages/ResetPassword/ResetPassword.css"
import "./Success.css"
import { useDecreaseTimeShow } from "../../hooks/useDecreaseTimeShow"
import BackgroundContainer from "./common/BackgroundContainer";


const Title = styled.div`
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 1.25rem;
  }

  @media (max-width: 320px) {
    font-size: 1rem;
  }
  font-size: 1.5rem;
`

const Success: React.FC = () => {
  const [handleOnClick, timeShow] = useDecreaseTimeShow()
  return (
    <BackgroundContainer>
      <div className="checkedBox">
        <CheckSvg />
        <Title>รีเซ็ตรหัสผ่านสำเร็จ</Title>
        <ConfirmButton text={`กลับสู่หน้าหลัก (${timeShow})`} handleOnClick={handleOnClick} />
      </div>
    </BackgroundContainer>
  )
}
export default Success
