import axios from "axios"
import Axios from "axios"

export const client = Axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

const getAboutFE = async() => {
  try {
    const res = await client.get('/setting/1')
    return res
  } catch (error) {
    console.log(error)
  }
}

const getPhotoPreview = async() => {
  try {
    const res = await client.get('/setting/2')
    return res
  } catch (error) {
    console.log(error)
  }
}

const getQualifications = async() => {
  try {
    const res = await client.get('/setting/3')
    return res
  } catch (error) {
    console.log(error)
  }
}

const getSchedule = async() => {
  try {
    const res = await client.get('/setting/5')
    return res
  } catch (error) {
    console.log(error)
  }
}

export const landingPageInstance = {
  getAboutFE,
  getPhotoPreview,
  getQualifications,
  getSchedule
}

