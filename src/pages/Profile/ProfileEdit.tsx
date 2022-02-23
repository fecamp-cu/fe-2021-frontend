import Form from "../../components/Form/Form"
import ProfilePictureEdit from "../../components/Profile/Profile"
import "./Profile_edit.css"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { clientInstance } from "../../utils/client"
import { Button } from "../../components/Buttons/Button"
import { IoMdArrowBack } from "react-icons/io"
import { ProfileProps } from "./ProfileShow"
import { Profile, User } from "../../utils/types/common"

function ProfileEdit(props: ProfileProps) {
  //   const [user, setUser] = useState({
  //     id: 0,
  //     username: "",
  //     email: "",
  //     role: "",
  //     profile: {
  //       id: 0,
  //       firstName: "",
  //       lastName: "",
  //       imageUrl: "",
  //       tel: "",
  //       grade: "",
  //       school: "",
  //       address: "",
  //       subdistrict: "",
  //       district: "",
  //       province: "",
  //       postcode: "",
  //     },
  //   })

  const [values, setValues] = useState({
    id: 0,
    firstName: "",
    lastName: "",
    imageUrl: "",
    tel: "",
    grade: "",
    school: "",
    address: "",
    subdistrict: "",
    district: "",
    province: "",
    postcode: "",
  })

  const [image, setImage] = useState<File>()

  // useEffect(()=>{
  //     clientInstance.getUser().then((res)=>{
  //         setUser(res.data)
  //         setValues(res?.data.profile)
  //     })
  //     console.log(user);

  //         clientInstance.postLogin({
  //             "email": "pattarapon.knot@gmail.com",
  //             "password": "7v'!Fx]u%eTLibpV"
  //           });

  //           console.log("login");

  // },[])

  const onChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const onChangeImage = (event: any) => {
    const file = event.target.files?.item(0)
    if (file && file.type.substring(0, 5) === "image") {
      setImage(file)
    }
    console.log(file)
  }

  const onSubmit = (e: any) => {
    e.preventDefault()
    const { id, ...newValues } = values
    console.log(newValues)
    clientInstance.putProfile(image, values.id)
    clientInstance.patchProfile(newValues, values.id)
  }

  return (
    <div>
      <Link to="/ProfileShow">
        <IoMdArrowBack color="white" size="2.5em" className="absolute ml-[80px]" />
      </Link>
      <h1 className="mt-[75px] items-center text-center text-3xl font-bold text-white">ข้อมูลส่วนตัว</h1>
      <div className="mx-auto mt-[24px] mb-[-70px] h-[120px] w-[120px]">
        <ProfilePictureEdit onChange={onChangeImage} image={image} preview={(props.user.profile as Profile).imageUrl} />
      </div>
      <div className="mx-auto h-[440px] w-[1040px] rounded-[15px] bg-white/30 pt-[60px] text-center text-white shadow-lg">
        <Form onChange={onChange} onSubmit={onSubmit} values={values} email={props.user.email} ids={"myform"} />
        <form>
          <Link to="/ProfileShow">
            <Button className="mr-[50px]" width="157" height="40" fontSize="20" textColor="white" outline shadow={false}>
              ยกเลิก
            </Button>
          </Link>

          <Button width="157" height="40" fontSize="20" form="myform" bg="white" textColor="#9B2C33" outline={false} shadow>
            บันทึก
          </Button>
        </form>
      </div>
    </div>
  )
}

export default ProfileEdit
