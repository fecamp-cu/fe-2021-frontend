import Axios, { AxiosResponse, CancelTokenSource } from "axios"
import { ProductInfoProps } from "../components/ProductInfo/ProductInfo"
import { Endpoint } from "./enums/common.enum"
import { Credentials } from "./types/common"
import { addSeconds, isPast } from "date-fns"
import { LoginPayload } from "./types/auth"

function storeToken(credentials: Credentials): void {
  const expireDate = addSeconds(Date.now(), credentials.expiresIn).toISOString()

  localStorage.setItem("fe_camp_access_token", credentials.accessToken)
  localStorage.setItem("fe_camp_refresh_token", credentials.refreshToken)
  localStorage.setItem("fe_camp_expire_date", expireDate)
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

client.interceptors.request.use(
  async (req) => {
    if (!req?.headers?.Authorization) {
      const accessToken = localStorage.getItem("fe_camp_access_token") as string

      if (req.headers && accessToken) {
        req.headers.Authorization = `Bearer ${accessToken}`
      }
    }
    return req
  },
  (err) => Promise.reject(err)
)
const renewToken = async (refreshToken: string) => {
  try {
    const res: AxiosResponse = await client.post("/auth/token", { refreshToken })
    storeToken(res.data)
    return res.data.accessToken
  } catch (err) {
    return undefined
  }
}

const getProfile = async () => {
  const res: AxiosResponse = await client.get(Endpoint.ME + "?order=false")
  return res.data
}

const fetchProduct = async (id: string, setProduct: (data: ProductInfoProps) => void, cancelToken?: CancelTokenSource) => {
  try {
    const { data } = await client.get<ProductInfoProps>(`/api/item/${id}`, { cancelToken: cancelToken?.token })
    setProduct(data)
  } catch (err) {
    alert("error cannot get product")
  }
}

const getUserInfo = async () => {
  const res = await client.get("/auth/me")
}
const postLogin = async (postLog: object) => {
  const res = await client.post("/auth/login", postLog)
  storeToken(res.data)
}
const resetPassword = async (requestReset: object) => {
  await client.post("/auth/reset-password/request", requestReset)
}
const postRegister = async (postReg: object) => {
  const res = await client.post("/auth/register", postReg)
}
const getGoogle = async () => {
  await client.get("/auth/google")
}
const getFacebook = async () => {
  await client.get("/auth/facebook")
}
const getLogout = async () => {
  const res = await client.get("/auth/logout")
}

export const apiClient = {
  getProfile,
  fetchProduct,
  getActiveSetting,
  postLogin,
  resetPassword,
  postRegister,
  getGoogle,
  getFacebook,
  getLogout,
  storeToken,
  renewToken,
}
