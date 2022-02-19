import Axios, { AxiosResponse, CancelTokenSource } from "axios"
import { ProductInfoProps } from "../components/ProductInfo/ProductInfo"
import { Endpoint, Path } from "./enums/common.enum"
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
})

// async function addBearer() {
//   let accessToken = localStorage.getItem("fe_camp_access_token")

//   if (isPast(new Date(localStorage.getItem("fe_camp_expire_date") as string))) {
//     const res: AxiosResponse = await client.post("/auth/token", { refreshToken: localStorage.getItem("fe_camp_refresh_token") as string })
//     accessToken = res.data.accessToken
//     storeToken(res.data)
//   }
//   client.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`
// }

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

export { getProfile, fetchProduct, mockLogin }
