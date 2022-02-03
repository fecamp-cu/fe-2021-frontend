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

const getProfile =async () => {
    addBearer();
    const res = await client.get("/profile");
    console.log(res);
    return res;
}

const patchProfile = async(patchProf : object,id:any) =>{
  const res = await client.patch("/profile/"+id,patchProf)
  storeToken(res.data);
}

const putProfile = async(putProf : any,id:any) =>{
  if(putProf){ 
    const formData = new FormData();
    formData.append('avatar',putProf);
    const config = {
      headers: {
          'content-type': 'multipart/form-data'
      }
    }
    const res = await client.put("/profile/"+id+"/upload",formData,config)
    storeToken(res.data);
  }
}

const getUser =async () => {
  addBearer();
  const res = await client.get("/auth/me");
  console.log(res);
  return res;
}

const postLogin = async(postLog : object) =>{
  const res = await client.post("/auth/login",postLog)
  console.log(res);
  storeToken(res.data);
}

const getLogout = async() =>{
  const res = await client.get("/auth/logout")
  storeToken(res.data);
}

const getOrder =async (id : any) => {
  addBearer();
  const res = await client.get("/order/"+id)
  console.log(res);
  return res;
}

const getOrderAll =async () => {
  addBearer();
  const res = await client.get("/auth/me?order=true")
  console.log(res);
  return res;
}

const getTest =async () => {
  const res = await client.get("/")
  console.log(res);
}

export const clientInstance = {
  client,
  getProfile,
  patchProfile,
  postLogin,
  getOrder,
  getUser,
  putProfile,
  getLogout,
  getOrderAll,
  getTest
}

