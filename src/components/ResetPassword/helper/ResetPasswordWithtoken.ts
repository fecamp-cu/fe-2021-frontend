import { AxiosError } from "axios"
import { client } from "../../../utils/client"
import { PasswordChecker } from "./PasswordChecker"

export const ResetPasswordWithtoken = async (
  formData: { [key: string]: string },
  id: number,
  token: string
): Promise<{ status: number; errorText: string }> => {
  const { password, confirmPassword } = formData
  if (PasswordChecker(password, confirmPassword)) {
    try {
      const response = await client.post(`/auth/reset-password/${token}`, { id, password })
      return { status: response.status, errorText: "" }
    } catch (err) {
      const error = err as AxiosError
      if (error.response) {
        return { status: error.response.status, errorText: error.response.data.message }
      }
      return { status: 500, errorText: "พบปัญหาที่ไม่ทราบสาเหตุ" }
    }
  }
  if (password !== confirmPassword) {
    return { status: 400, errorText: "รหัสผ่านไม่ตรงกัน" }
  }
  return { status: 400, errorText: "รหัสผ่านควรจะเเข็งแรงกว่านี้" }
}
