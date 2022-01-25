import Axios from "axios"

export const client = Axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

const postProfile = async(postProf : object) =>{
  await client.post("https://dev.fe.in.th/api/profile",postProf)
}

const getProfile =async () => {
  try{
    const res = await client.get("https://dev.fe.in.th/api/setting/1")
    console.log(res);
  }catch{
    console.log("error");
  }
  
}

const clientInstance = {
  client,
  postProfile,
  getProfile
}

export default clientInstance