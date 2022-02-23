import Axios, { AxiosResponse, CancelTokenSource } from "axios"
import { ProductInfoProps } from "../components/ProductInfo/ProductInfo"
import { Endpoint } from "./enums/common.enum"
import { Credentials, User } from "./types/common"
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
})

const getActiveSetting = async () => {
  try {
    const res: AxiosResponse = await client.get("/settings/active")
    return res.data
  } catch (error) {
    console.log(error)
  }
}

// FIXME remove this (MOCK data)

const mockLogin = async (credentials: LoginPayload) => {
  const res = await client.post(Endpoint.LOGIN, credentials)
  storeToken(res.data)
  client.interceptors.request.use(
    async (req) => {
      if (!req?.headers?.Authorization) {
        let accessToken = localStorage.getItem("fe_camp_access_token") as string
        const refreshToken = localStorage.getItem("fe_camp_refresh_token") as string

        if (!!refreshToken && isPast(new Date(localStorage.getItem("fe_camp_expire_date") as string))) {
          const res: AxiosResponse = await client.post("/auth/token", { refreshToken })
          console.log(req)
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

const getProfile = async () => {
  const res: AxiosResponse = await client.get(Endpoint.ME + "?order=true")
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

const patchProfile = async (patchProf: object, id: any) => {
  const res = await client.patch("/profile/" + id, patchProf)
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

const postLogin = async (postLog: object) => {
  const res = await client.post("/auth/login", postLog)
  console.log(res)
  storeToken(res.data)
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

export const clientInstance = {
  client,
  patchProfile,
  postLogin,
  getUser,
  putProfile,
  getLogout,
  getOrderAll,
  getProfile,
}

export const apiClient = { getUser, fetchProduct, mockLogin, getActiveSetting, getLogout, getOrderAll }
