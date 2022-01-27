import { AxiosResponse, default as axios, default as Axios } from "axios"
import { addSeconds, isPast } from "date-fns"
import { PaymentTypes, PromotionCodeType } from "./enums"
import { Credentials } from "./types/auth"
import { AboutFe, Photo, Qualification, Setting, Sponsor, Timeline } from "./types/setting"
import { Basket, CheckoutPayload, costumerData, GenPromotionCode } from "./types/shop"

function createCheckoutPayload(source: object, costumerData: costumerData, basket: Basket[], promotionCode?: string): CheckoutPayload {
  const data: CheckoutPayload = {
    source,
    email: costumerData.email,
    firstName: costumerData.firstName,
    lastName: costumerData.lastName,
    tel: costumerData.tel,
    grade: costumerData.grade,
    school: costumerData.school,
    address: costumerData.address,
    subdistrict: costumerData.subdistrict,
    district: costumerData.district,
    province: costumerData.province,
    postcode: costumerData.postcode,
    basket,
  }

  if (costumerData.shippingAddress) {
    data.address = costumerData.shippingAddress
    data.subdistrict = costumerData.shippingSubDistrict
    data.district = costumerData.shippingDistrict
    data.province = costumerData.shippingProvince
    data.postcode = costumerData.shippingPostCode
  }

  if (promotionCode) {
    data.promotionCode = promotionCode
  }

  return data
}

function storeToken(credentials: Credentials): void {
  const expireDate = addSeconds(Date.now(), credentials.expiresIn).toISOString()

  localStorage.setItem("fe_camp_access_token", credentials.accessToken)
  localStorage.setItem("fe_camp_refresh_token", credentials.refreshToken)
  localStorage.setItem("fe_camp_expire_date", expireDate)
}

const client = Axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
})

export const getCSRFToken = async () => {
  const res: AxiosResponse = await axios.get(process.env.REACT_APP_API_URL + "/who-am-i")
  console.log(res.data)
  client.defaults.headers.common["XSRF-Token"] = res.data.csrfToken
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

const login = async () => {
  const res = await client.post("/auth/login", {
    email: "superadmin@gmail.com",
    password: "adminadmin",
  })

  storeToken(res.data)
}

const userInfo = async () => {
  await addBearer()
  const res = await client.get("/auth/me", {
    withCredentials: true,
  })
  console.log(res)
}

const getActivedSetting = async (
  setYoutubeURL: (url: string) => void,
  setRegisterURL: (url: string) => void,
  setAboutFEs: (aboutFEs: AboutFe[]) => void,
  setTimelines: (timelines: Timeline[]) => void,
  setPhotos: (photos: Photo[]) => void,
  setQualifications: (qualifications: Qualification[]) => void,
  setSponsors: (sponsors: Sponsor[]) => void
): Promise<void> => {
  await addBearer()
  const res = await client.get("/settings/active")
  const activedSetting: Setting = res.data

  setYoutubeURL(activedSetting.youtubeUrl)
  setRegisterURL(activedSetting.registerFormUrl)
  setAboutFEs(activedSetting.aboutFeContainers)
  setTimelines(activedSetting.timelineEvents)
  setPhotos(activedSetting.photoPreviews)
  setQualifications(activedSetting.qualificationPreviews)
  setSponsors(activedSetting.sponcerContainers)

  console.log(res)
}

const checkout = async (source: object, paymentType: PaymentTypes, costumerData: costumerData, basket: Basket[], promotionCode?: string) => {
  const data = createCheckoutPayload(source, costumerData, basket, promotionCode)

  try {
    const res = await client.post(`/shop/checkout/${paymentType}`, data)
    console.log("done")
    console.log(res)
    return res.data
  } catch (err) {
    console.log(err)
  }
}

const genCode = async (
  type: PromotionCodeType,
  setCode: (code: string) => void,
  isReuseable?: boolean,
  expireDate?: Date,
  code?: string,
  value?: number
) => {
  if (!isReuseable) {
    isReuseable = false
  }

  const data: GenPromotionCode = {
    type,
    isReuseable,
  }

  if (expireDate) {
    data.expireDate = expireDate
  }

  if (code) {
    data.code = code
  }

  if (value) {
    data.value = value
  }

  const res = await client.post(`/shop/generate-code`, data)
  setCode(res.data.code)
  console.log(res)
}
const verifyCode = async (code: string) => {
  const res = await client.post(`/shop/verify/${code}`)
  console.log(res)
}

const testAPI = async () => {
  const res = await client.get("/")
  console.log(res)
}

const clientInstance = {
  testAPI,
  checkout,
  genCode,
  verifyCode,
  login,
  userInfo,
  getActivedSetting,
}

export default clientInstance
