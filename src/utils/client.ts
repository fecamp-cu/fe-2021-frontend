import Axios, { AxiosResponse, CancelTokenSource } from "axios"
import { ProductInfoProps } from "../components/ProductInfo/ProductInfo"
import { Endpoint } from "./enums/common.enum"
import { Credentials } from "./types/common"
import { addSeconds, isPast } from "date-fns"
import { LoginPayload } from "./types/auth"
import { ClientRequest } from "http"

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
  const res: AxiosResponse = await client.get(Endpoint.ME + "?order=false")
  return res.data
}

const fetchProduct = async (id: string, cancelToken?: CancelTokenSource) => {
  try {
    const { data } = await client.get<ProductInfoProps>(`/api/item/${id}`, { cancelToken: cancelToken?.token })
    return data
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
  return res
}
const putProfile = async (id: string, file: FormData) => {
  const res = await client.put(`/api/profile/${id}/upload`, file, {headers: {'content-Type': 'multipart/form-data'}})
  return res
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
  putProfile,
}
