import { useState, useCallback } from "react"
import ButtonGroup from "../../components/ResetPassword/ButtonGroup"
import ConfirmPasswordField from "../../components/ResetPassword/ConfirmPasswordField"
import { PasswordChecker } from "../../components/ResetPassword/helper/PasswordChecker"
import TextField from "../../components/ResetPassword/TextField"
import Title from "../../components/ResetPassword/Title"
import "./ResetPassword.css"
import { useLocation, Location, useNavigate } from "react-router-dom"
import { ResetPasswordWithtoken } from "../../components/ResetPassword/helper/ResetPasswordWithtoken"
import Success from "../../components/ResetPassword/Success"
import warning from "postcss/lib/warning"
import WarningBox from "../../components/ForgotPassword/WarningBox"
import { stringify } from "querystring"

const getTokenInfo = (location: Location) => {
  const url = location.pathname + "&token=" + location.search.slice(1, location.search.length)
  const params = new URLSearchParams(url)
  const token = params.get("token") || "invalid token"
  const userId = params.get("userId") || "-1"
  return [token, parseInt(userId)] as const
}

const ResetPassword = () => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({ password: "", confirmPassword: "" })
  const [increment, setIncrement] = useState<number>(0)
  const handleFormUpdate = useCallback((title: string, text: string) => {
    setFormData((prevForm) => ({ ...prevForm, [title]: text }))
  }, [])
  const location = useLocation()
  const [warning,setWarning] = useState<{warningText:string,status:number}>({warningText:"",status:200});
  const handleOnSubmit = async () => {
    const [token, userId] = getTokenInfo(location)
    const { status, errorText } = await ResetPasswordWithtoken(formData, userId, token)
    if (status === 200 || status === 201 || status === 204) {
      setIncrement((prevIncrement) => prevIncrement + 1)
    }
    setWarning({status,warningText:errorText});
    return { status, errorText }
  }

  return increment === 0 ? (
    <div className="logincon">
      <div className="box">
        <div className="backgroundBox">
          <div className="titleContainer">
            <Title>เปลี่ยนรหัสผ่าน</Title>
            <WarningBox warningText={warning.warningText} status={warning.status} />
          </div>
          <div className="changePasswordBox">
            <TextField title="รหัสผ่านใหม่" placeholder="รหัสผ่าน..." formTitle="password" handleFormUpdate={handleFormUpdate} />
            <ConfirmPasswordField
              password={formData.password}
              title="ยืนยันรหัสผ่าน"
              placeholder="ยืนยันรหัสผ่าน..."
              formTitle="confirmPassword"
              handleFormUpdate={handleFormUpdate}
            />
          </div>
          <ButtonGroup canSubmit={PasswordChecker(formData.password, formData.confirmPassword)} handleOnSubmit={handleOnSubmit} />
        </div>
      </div>
    </div>
  ) : (
    <Success />
  )
}
export default ResetPassword
