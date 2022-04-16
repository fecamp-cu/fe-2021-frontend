import { AxiosError } from "axios"
import { client } from "../../../utils/client"
import { EmailChecker } from "../../ResetPassword/helper/EmailChecker";

export const SendPasswordRequest = async (formData: { [key: string]: string }):Promise<{status:number,errorText:string}> => {
  if (EmailChecker(formData.email)) {
    try {
      const response = await client.post("/auth/reset-password/request", formData)
      return { status: response.status, errorText: "" }
    } catch (err) {
      const error = err as AxiosError
      if (error.response) {
        return { status: error.response.status, errorText: "เกิดข้อผิดพลาดกับเว็ปไซต์ โปรดลองภายหลัง" }
      }
      return { status: 500, errorText: "พบปัญหาที่ไม่ทราบสาเหตุ" }
    }
  }
  return { status: 400, errorText: "อีเมลไม่ถูกต้อง" }
}
