import axios, { AxiosResponse } from "axios"
import Axios from "axios"
import { addSeconds, isPast } from "date-fns"
import { Credentials } from "./types/auth"

function storeToken(credentials: Credentials): void {
  const expireDate = addSeconds(Date.now(), credentials.expiresIn).toISOString()

  localStorage.setItem("fe_camp_access_token", credentials.accessToken)
  localStorage.setItem("fe_camp_refresh_token", credentials.refreshToken)
  localStorage.setItem("fe_camp_expire_date", expireDate)
}

const client = Axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials : true
})

async function addBearer() {
  let accessToken = localStorage.getItem("fe_camp_access_token")

  if (isPast(new Date(localStorage.getItem("fe_camp_expire_date") as string))) {
    const res: AxiosResponse = await client.post("/auth/token", { refreshToken: localStorage.getItem("fe_camp_refresh_token") as string })
    accessToken = res.data.accessToken
    storeToken(res.data)
  }
  client.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`
}


const testAPI = async () => {
  const res = await client.get("/")
  console.log(res)
}

const getUserInfo = async () =>{
  addBearer()
  const res = await client.get("/auth/me")
  console.log(res)
}

const postLogin = async (postLog : object) => {
  const res = await client.post("/auth/login", postLog)
  storeToken(res.data)
}

const resetPassword = async (requestReset : object) =>{
  await client.post("/auth/reset-password/request", requestReset)
}

const postRegister = async (postReg : object) => {
  await client.post("/auth/register", postReg)
}

const getGoogle = async () => {
  await client.get("/auth/google")
}

const getFacebook = async () =>{
  await client.get("/auth/facebook")
}

const clientInstance = {
  client,
  testAPI,
  getUserInfo,
  postRegister,
  postLogin,
  getGoogle,
  getFacebook,
  resetPassword
}

export default clientInstance

