import Axios, { AxiosResponse, CancelTokenSource } from "axios"
import { ProductInfoProps } from "../components/ProductInfo/ProductInfo"
import { Endpoint } from "./enums/common.enum"
import { Credentials, User } from "./types/common"
import { addSeconds, isPast } from "date-fns"
import { FacebookAuthToken, LoginPayload } from "./types/auth"
import { PaymentOption, ProductTransaction } from "./types/shop"
import { PromotionCodeType } from "./enums/shop.enum"
export function storeToken(credentials: Credentials): void {
  const expireDate = addSeconds(Date.now(), credentials.expiresIn).toISOString()

  localStorage.setItem("fe_camp_access_token", credentials.accessToken)
  localStorage.setItem("fe_camp_refresh_token", credentials.refreshToken)
  localStorage.setItem("fe_camp_expire_date", expireDate)
}

export type GenPromotionCode = {
  type: PromotionCodeType
  isReuseable?: boolean
  expireDate?: Date
  code?: string
  value?: number
}

export type CustomerInfo = {
  firstName: string
  lastName: string
  tel: string
  email: string
  grade: string
  school: string
  address: string
  subdistrict: string
  district: string
  province: string
  postcode: string
  promotion_code?: string
  basket: ProductTransaction[]
}

const client = Axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
})

const getActiveSetting = async () => {
  try {
    const res: AxiosResponse = await client.get("/settings/active")
    return res.data
  } catch (error) {
    console.log(error)
  }
}

const renewToken = async (refreshToken: string): Promise<string | undefined> => {
  try {
    const res: AxiosResponse = await client.post("/auth/token", { refreshToken })
    storeToken(res.data)
    return res.data.accessToken
  } catch (err) {
    return undefined
  }
}

const getProfile = async () => {
  const res: AxiosResponse = await client.get(Endpoint.ME + "?order=true")
  return res.data
}

const fetchProduct = async (id: string, cancelToken?: CancelTokenSource) => {
  try {
    const { data } = await client.get<ProductInfoProps>(`/item/${id}`, { cancelToken: cancelToken?.token })
    return data
  } catch (err) {
    alert("error cannot get product")
  }
}

const patchProfile = async (patchProf: object, id: number) => {
  await client.patch("/profile/" + id, patchProf)
}

const postLogin = async (postLog: LoginPayload) => {
  const res = await client.post("/auth/login", postLog)
  storeToken(res.data)
  client.interceptors.request.use(
    async (req) => {
      if (!req?.headers?.Authorization) {
        let accessToken = localStorage.getItem("fe_camp_access_token") as string
        const refreshToken = localStorage.getItem("fe_camp_refresh_token") as string

        if (!!refreshToken && isPast(new Date(localStorage.getItem("fe_camp_expire_date") as string))) {
          const res: AxiosResponse = await client.post("/auth/token", { refreshToken })
          accessToken = res.data.accessToken
          storeToken(res.data)
        }

        if (req.headers && accessToken) {
          req.headers.Authorization = `Bearer ${accessToken}`
        }
      }
      return req
    },
    (err) => Promise.reject(err)
  )
}
const resetPassword = async (requestReset: object) => {
  await client.post("/auth/reset-password/request", requestReset)
}

const postRegister = async (postReg: object) => {
  const res = await client.post("/auth/register", postReg)
  return res
}

const putProfilePicture = async (id: string, file: FormData) => {
  const res = await client.put(`/api/profile/${id}/upload`, file, { headers: { "content-Type": "multipart/form-data" } })
  return res
}

const getGoogle = async () => {
  return await client.get("/auth/google")
}

const getFacebook = async () => {
  return await client.get("/auth/facebook")
}

const googleCallback = async (token: string) => {
  const res = await client.get("/auth/google/callback", { params: { code: token } })
  storeToken(res.data)
}

const facebookCallback = async ({ state, code }: FacebookAuthToken) => {
  const res = await client.get("/auth/facebook/callback", { params: { state, code } })
  storeToken(res.data)
}

const logout = async () => {
  await client.get("/auth/logout")
}

const putProfile = async (putProf: File | undefined, id: number) => {
  if (putProf) {
    const formData = new FormData()
    formData.append("avatar", putProf)
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
      onUploadProgress: (ProgressEvent: any) => {
        const { loaded, total } = ProgressEvent
        const percent = Math.floor((loaded * 100) / total)
        console.log(ProgressEvent)
      },
    }
    const res = await client.put("/profile/" + id + "/upload", formData, config)
    console.log(res)
  }
}

const getUser = async (): Promise<User> => {
  const res: AxiosResponse = await client.get(Endpoint.ME + "?order=true")
  return res.data
}

const getLogout = async () => {
  const res = await client.get("/auth/logout")
  storeToken(res.data)
}

const getOrderAll = async () => {
  const res = await client.get("/auth/me?order=true")
  console.log(res)
  return res
}

const checkout = async (customerInfo: CustomerInfo, paymentOption: PaymentOption, token?: { id: string }) => {
  const res = await client.post(`/shop/checkout/${paymentOption.type}`, {
    source: token,
    ...customerInfo,
    bank: paymentOption.bank,
  })
  console.log(res)
}

const genCode = async (
  type: PromotionCodeType,
  setCode: (code: string) => void,
  isReuseable?: boolean,
  expireDate?: Date,
  code?: string,
  value?: number
) => {
  if (!isReuseable) {
    isReuseable = false
  }

  const data: GenPromotionCode = {
    type,
    isReuseable,
  }

  if (expireDate) {
    data.expireDate = expireDate
  }

  if (code) {
    data.code = code
  }

  if (value) {
    data.value = value
  }

  const res = await client.post(`/shop/generate-code`, data)
  setCode(res.data.code)
  console.log(res)
}
const verifyCode = async (code: string) => {
  const res = await client.post(`/shop/verify/${code}`)
  console.log(res)
}

const testAPI = async () => {
  const res = await client.get("/")
  console.log(res)
  return res
}

export const apiClient = {
  patchProfile,
  putProfile,
  getUser,
  getLogout,
  getOrderAll,
  getProfile,
  fetchProduct,
  getActiveSetting,
  postLogin,
  resetPassword,
  postRegister,
  getGoogle,
  getFacebook,
  logout,
  storeToken,
  renewToken,
  putProfilePicture,
  googleCallback,
  facebookCallback,
  testAPI,
  checkout,
  genCode,
  verifyCode,
}

const clientInstance = {}

export default clientInstance
