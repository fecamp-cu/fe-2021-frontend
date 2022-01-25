import Axios from "axios"

const client = Axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

const testAPI = async () => {
  const res = await client.get("/")
  console.log(res)
}

const postLogin = async (postLog : object) => {
  const res = await client.post("/auth/login", postLog)
  console.log(res)
}

const clientInstance = {
  client,
  testAPI,
  postLogin
}

export default clientInstance

