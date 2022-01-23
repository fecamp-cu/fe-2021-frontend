import Axios from "axios"

const client = Axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

const testAPI = async () => {
  const res = await client.get("/")
  console.log(res)
}

const clientInstance = {
  testAPI,
}

export default clientInstance

