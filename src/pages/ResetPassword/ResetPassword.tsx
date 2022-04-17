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
import { useUpdateFormData } from "../../hooks/useUpdateFormData"
import BackgroundContainer from "../../components/ResetPassword/common/BackgroundContainer"
import LoadingSpinner from "../../components/ForgotPassword/LoadingSpinner"

export const getTokenInfo = (location: Location) => {
  const url = location.pathname + "&token=" + location.search.slice(1, location.search.length)
  const params = new URLSearchParams(url)
  const token = params.get("token") || "invalid token"
  const userId = params.get("userId") || "-1"
  return [token, parseInt(userId)] as const
}

const ResetPassword = () => {
  const [formData, increment, loading, handleFormUpdate, warning, handleOnSubmit] = useUpdateFormData("password")
  return increment === 0 ? (
    <BackgroundContainer>
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
        <LoadingSpinner isLoading = {loading} />
      </div>
    </BackgroundContainer>
  ) : (
    <Success />
  )
}
export default ResetPassword
