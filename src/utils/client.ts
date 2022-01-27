import axios from "axios"
import Axios from "axios"

const client = Axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  /*withCredentials : true*/
})

const testAPI = async () => {
  const res = await client.get("/")
  console.log(res)
}

const getUserInfo = async () =>{
    const res = await client.get("/auth/me")
    return res
}

const postLogin = async (postLog : object) => {
  const res = await client.post("/auth/login", postLog)
  console.log(res)
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

