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

const patchProfile = async(patchProf : object,id:any) =>{
  const res = await client.patch("/profile/"+id,patchProf)
  storeToken(res.data);
}

const putProfile = async(putProf : File|undefined,id:number) =>{
  addBearer();
  if(putProf){ 
    const formData = new FormData();
    formData.append('avatar',putProf);
    const config = {
      headers: {
          'content-type': 'multipart/form-data'
      },
      onUploadProgress: (ProgressEvent:any) => {
          const {loaded,total} = ProgressEvent;
          const percent = Math.floor((loaded*100)/total);
          console.log(ProgressEvent);
      }
    }
    const res = await client.put("/profile/"+id+"/upload",formData,config)
    console.log(res);
  }
}

const getUser =async () => {
  addBearer();
  const res = await client.get("/auth/me");
  console.log(res);
  return res;
}

const getProfile =async (id:number) => {
  addBearer();
  const res = await client.get("/profile/" + id);
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


const getOrderAll =async () => {
  addBearer();
  const res = await client.get("/auth/me?order=true")
  console.log(res);
  return res;
}

export const clientInstance = {
  client,
  patchProfile,
  postLogin,
  getUser,
  putProfile,
  getLogout,
  getOrderAll,
  getProfile
}

