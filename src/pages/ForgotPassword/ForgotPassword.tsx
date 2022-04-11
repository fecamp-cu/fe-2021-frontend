import { useCallback, useState } from "react"
import Body from "../../components/ResetPassword/Body"
import ButtonGroup from "../../components/ResetPassword/ButtonGroup"
import { EmailChecker } from "../../components/ResetPassword/helper/EmailChecker"
import InputField from "../../components/ResetPassword/InputField"
import Title from "../../components/ResetPassword/Title"
import "../ResetPassword/ResetPassword.css"
import { SendPasswordRequest } from "../../components/ForgotPassword/helper/SendPasswordRequest"
import Success from "../../components/ForgotPassword/Success"
import WarningBox from "../../components/ForgotPassword/WarningBox"

const ForgotPassword = () => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({ resetEmail: "" })
  const [increment, setIncrement] = useState<number>(0)
  const handleFormUpdate = useCallback((title: string, text: string) => {
    setFormData((prevForm) => ({ ...prevForm, [title]: text }))
  }, [])
  const [warning, setWarning] = useState<{ warningText: string; status: number }>({ warningText: "", status: 200 })
  const handleOnSubmit = async () => {
    const { status, errorText } = await SendPasswordRequest(formData)
    if (status === 200 || status === 201 || status === 204) {
      setIncrement((prevValue) => prevValue + 1)
    }
    setWarning({ status, warningText: errorText })
    return { status, errorText }
  }
  return increment === 0 ? (
    <div className="logincon">
      <div className="box">
        <div className="backgroundBox">
          <div className="titleContainer">
            <Title>ลืมรหัสผ่าน</Title>
            <WarningBox warningText={warning.warningText} status={warning.status} />
          </div>

          <div className="resetPasswordBox">
            <Body>โปรดป้อนที่อยู่อีเมลเพื่อรีเซ็ตรหัสผ่าน</Body>
            <InputField placeholder="อีเมล..." handleFormUpdate={handleFormUpdate} formTitle="resetEmail" inputType="email" />
          </div>
          <ButtonGroup canSubmit={EmailChecker(formData.resetEmail)} handleOnSubmit={handleOnSubmit} />
        </div>
      </div>
    </div>
  ) : (
    <Success handleOnClick={handleOnSubmit} />
  )
}
export default ForgotPassword
