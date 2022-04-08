import ButtonGroup from "../../components/ResetPassword/ButtonGroup"
import TextField from "../../components/ResetPassword/TextField"
import Title from "../../components/ResetPassword/Title"
import "./ResetPassword.css"

const ChangePassword = () => {
  return (
    <div className="logincon">
      <div className="box">
        <div className="backgroundBox">
          <Title>เปลี่ยนรหัสผ่าน</Title>
          <div className="changePasswordBox">
            <TextField title = "รหัสผ่านใหม่" placeholder="รหัสผ่าน..." />
            <TextField title = "ยืนยันรหัสผ่าน" placeholder="ยืนยันรหัสผ่าน..." />
          </div>
          <ButtonGroup />
        </div>
      </div>
    </div>
  )
}
export default ChangePassword
