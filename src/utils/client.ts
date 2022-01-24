import axios from "axios"
import Axios from "axios"

export const client = Axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

const aboutFE = async() => {
  try {
    const res = await client.get('/setting/about_fe_container/1')
    return res;
  } catch (error) {
    console.log(error)
  }
  // const res = await client.get('/setting/about_fe_container/1')
  // return res
}

export const landingPageInstance = {
  aboutFE
}

