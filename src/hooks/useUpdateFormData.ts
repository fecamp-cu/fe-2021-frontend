import { useState, useCallback } from "react"
import { useLocation } from "react-router-dom"
import { SendPasswordRequest } from "../components/ForgotPassword/helper/SendPasswordRequest"
import { ResetPasswordWithtoken } from "../components/ResetPassword/helper/ResetPasswordWithtoken"
import { getTokenInfo } from "../pages/ResetPassword/ResetPassword"

export const useUpdateFormData = (type: string) => {
  const [formData, setFormData] = useState<{ [key: string]: string }>(type === "password" ? { password: "", confirmPassword: "" } : { email: "" })
  const [increment, setIncrement] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(false)
  const handleFormUpdate = useCallback((title: string, text: string) => {
    setFormData((prevForm) => ({ ...prevForm, [title]: text }))
  }, [])
  const location = useLocation()
  const [warning, setWarning] = useState<{ warningText: string; status: number }>({ warningText: "", status: 200 })
  const handleOnSubmit = async () => {
    setLoading(true);
    let status = 200
    let errorText = ""
    if (type === "password") {
      const [token, userId] = getTokenInfo(location)
      const response = await ResetPasswordWithtoken(formData, userId, token)
      setLoading(false);
      status = response.status
      errorText = response.errorText
    } else if (type === "email") {
      const response = await SendPasswordRequest(formData)
      setLoading(false);
      status = response.status
      errorText = response.errorText
    }
    if (status === 200 || status === 201 || status === 204) {
      setIncrement((prevIncrement) => prevIncrement + 1)
    }
    setWarning({ status, warningText: errorText })
    setLoading(false);
    return { status, errorText }
  }

  return [formData, increment,loading, handleFormUpdate, warning, handleOnSubmit] as const
}
