import Axios, { AxiosResponse } from "axios"
import { addSeconds, isPast } from "date-fns"
import { Credentials } from "./types/auth"

export const client = Axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

function storeToken(credentials: Credentials): void {
  const expireDate = addSeconds(Date.now(), credentials.expiresIn).toISOString()

  localStorage.setItem("fe_camp_access_token", credentials.accessToken)
  localStorage.setItem("fe_camp_refresh_token", credentials.refreshToken)
  localStorage.setItem("fe_camp_expire_date", expireDate)
}

async function addBearer() {
  let accessToken = localStorage.getItem("fe_camp_access_token")

  if (isPast(new Date(localStorage.getItem("fe_camp_expire_date") as string))) {
    const res: AxiosResponse = await client.post("/auth/token", { refreshToken: localStorage.getItem("fe_camp_refresh_token") as string })
    accessToken = res.data.accessToken
    storeToken(res.data)
  }

  client.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`
}

const postProfile = async(postProf : object) =>{
  await client.post("/profile",postProf)
}

const getProfile =async () => {
    addBearer();
    const res = await client.get("/profile/12");
    console.log(res);
    return res;
}

const patchProfile = async(patchProf : object) =>{
  await client.post("/profile/14",patchProf)
}

const postLogin = async(postLog : object) =>{
  const res = await client.post("/auth/login",postLog)
  console.log(res);
  storeToken(res.data);
}

const getTest =async () => {
  const res = await client.get("/shop/5")
  console.log(res);
}

export const clientInstance = {
  client,
  postProfile,
  getProfile,
  patchProfile,
  postLogin,
  getTest
}

