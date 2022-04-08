import Body from "../../components/ResetPassword/Body"
import ButtonGroup from "../../components/ResetPassword/ButtonGroup"
import InputField from "../../components/ResetPassword/InputField"
import Title from "../../components/ResetPassword/Title"
import "./ResetPassword.css"

const ForgotPassword = () => {
  return (
    <div className="logincon">
      <div className="box">
        <div className="backgroundBox">
          <Title>ลืมรหัสผ่าน</Title>
          <div className="resetPasswordBox">
            <Body>โปรดป้อนที่อยู่อีเมลเพื่อรีเซ็ตรหัสผ่าน</Body>
            <InputField placeholder="อีเมล..." />
          </div>
          <ButtonGroup />
        </div>
      </div>
    </div>
  )
}
export default ForgotPassword
