import Axios from "axios"

export const client = Axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

const postProfile = async(postProf : object) =>{
  await client.post("/profile",postProf)
}

const getProfile =async () => {
    const res = await client.get("/profile")
    console.log(res);
}

const patchProfile = async(patchProf : object) =>{
  await client.post("/profile/14",patchProf)
}

const postLogin = async(postLog : object) =>{
  const res = await client.post("/auth/login",postLog)
  console.log(res);
  
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

