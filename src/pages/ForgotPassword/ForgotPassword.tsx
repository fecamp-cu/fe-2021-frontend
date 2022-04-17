import Body from "../../components/ResetPassword/Body"
import ButtonGroup from "../../components/ResetPassword/ButtonGroup"
import { EmailChecker } from "../../components/ResetPassword/helper/EmailChecker"
import InputField from "../../components/ResetPassword/InputField"
import Title from "../../components/ResetPassword/Title"
import "../ResetPassword/ResetPassword.css"
import Success from "../../components/ForgotPassword/Success"
import WarningBox from "../../components/ForgotPassword/WarningBox"
import { useUpdateFormData } from "../../hooks/useUpdateFormData"
import BackgroundContainer from "../../components/ResetPassword/common/BackgroundContainer"
import LoadingSpinner from "../../components/ForgotPassword/LoadingSpinner"
import { Fragment } from "react"

const ForgotPassword = () => {
  const [formData, increment, loading, handleFormUpdate, warning, handleOnSubmit] = useUpdateFormData("email")
  return increment === 0 ? (
    <BackgroundContainer>
      <Fragment>
        <div className="backgroundBox">
          <div className="titleContainer">
            <Title>ลืมรหัสผ่าน</Title>
            <WarningBox warningText={warning.warningText} status={warning.status} />
          </div>

          <div className="resetPasswordBox">
            <Body>โปรดป้อนที่อยู่อีเมลเพื่อรีเซ็ตรหัสผ่าน</Body>
            <InputField placeholder="อีเมล..." handleFormUpdate={handleFormUpdate} formTitle="email" inputType="email" />
          </div>
          <ButtonGroup canSubmit={EmailChecker(formData.email)} handleOnSubmit={handleOnSubmit} />
        </div>
        <LoadingSpinner isLoading={loading} />
      </Fragment>
    </BackgroundContainer>
  ) : (
    <Success handleOnSubmit={handleOnSubmit} />
  )
}
export default ForgotPassword
