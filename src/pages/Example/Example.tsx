import React from "react"
import { Button } from "../../components/Buttons/Button"
import { default as clientInstance } from "../../utils/client"
import { AboutFe, Photo, Qualification, Sponsor, Timeline } from "../../utils/types/setting"
import "./example.style.css"

const basket = [{ productId: 1, quantity: 1 }]
const costumerData = {
  email: "admin@samithiwat.dev",
  firstName: "samithiwat",
  lastName: "boonchai",
  tel: "0922501231",
  grade: "mor 5",
  school: "school",
  address: "address",
  subdistrict: "subdistrict",
  district: "district",
  province: "province",
  postcode: "11000",
  shippingAddress: "",
  shippingSubDistrict: "",
  shippingDistrict: "",
  shippingProvince: "",
  shippingPostCode: "",
}

const Example = () => {
  const [youtube, setYoutube] = React.useState<string>("")
  const [register, setRegister] = React.useState<string>("")
  const [photos, setPhoto] = React.useState<Photo[]>([])
  const [aboutFEs, setAboutFE] = React.useState<AboutFe[]>([])
  const [timelines, setTimeline] = React.useState<Timeline[]>([])
  const [qualifications, setQualification] = React.useState<Qualification[]>([])
  const [sponsors, setSponsor] = React.useState<Sponsor[]>([])

  return (
    <div className="App">
      <header className="App-header">
        <Button shadow={false} outline={false} onClick={() => clientInstance.login()}>
          Login
        </Button>
        <Button shadow={false} outline={false} onClick={() => clientInstance.userInfo()}>
          User Info
        </Button>
        <Button
          shadow={false}
          outline={false}
          onClick={() => clientInstance.getActivedSetting(setYoutube, setRegister, setAboutFE, setTimeline, setPhoto, setQualification, setSponsor)}
        >
          Settings
        </Button>
        <Button
          shadow={false}
          outline={false}
          onClick={() => {
            console.log(youtube)
            console.log(register)
            console.log(photos)
            console.log(aboutFEs)
            console.log(timelines)
            console.log(qualifications)
            console.log(sponsors)
          }}
        >
          Log all setting
        </Button>
      </header>
    </div>
  )
}

export default Example
// TODO: Delete this before production
// This is just a proposed project structure, feel free to change it if you want
