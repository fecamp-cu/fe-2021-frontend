import axios from "axios"
import Axios from "axios"

export const client = Axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

const getActiveSetting = async() => {
  try {
    const res = await client.get('/settings/active')
    return res
  } catch (error) {
    console.log(error)
  }
}

export const landingPageInstance = {
  getActiveSetting
}

