import axios from "axios"
import Axios from "axios"

export const client = Axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

export const test = async () => {
  const res = await axios.get("https://dev.fe.in.th/api/")
  console.log(res)
}