import { useState, useCallback } from "react"
import { useLocation } from "react-router-dom"
import { ResetPasswordWithtoken } from "../components/ResetPassword/helper/ResetPasswordWithtoken"
import { getTokenInfo } from "../pages/ResetPassword/ResetPassword"

export const useUpdateFormData = () => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({ password: "", confirmPassword: "" })
  const [increment, setIncrement] = useState<number>(0)
  const handleFormUpdate = useCallback((title: string, text: string) => {
    setFormData((prevForm) => ({ ...prevForm, [title]: text }))
  }, [])
  const location = useLocation()
  const [warning, setWarning] = useState<{ warningText: string; status: number }>({ warningText: "", status: 200 })
  const handleOnSubmit = async () => {
    const [token, userId] = getTokenInfo(location);
    const { status, errorText } = await ResetPasswordWithtoken(formData, userId, token)
    if (status === 200 || status === 201 || status === 204) {
      setIncrement((prevIncrement) => prevIncrement + 1)
    }
    setWarning({ status, warningText: errorText })
    return { status, errorText }
  }

  return [formData,increment,handleFormUpdate,warning,handleOnSubmit] as const
}
