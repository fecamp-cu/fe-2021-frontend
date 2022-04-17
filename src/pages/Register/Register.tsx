import { useState } from "react"
import PersonalInfoForm from "../../components/Form/Form"
import "./Register.css"
import styled from "styled-components"
import { Button } from "../../components/Buttons/Button"
import { Link, useNavigate } from "react-router-dom"
import { apiClient } from "../../utils/client"

const Input = styled.input`
  flex-shrink: 1;
  margin: 5px;
  padding: 1px 10px;
  height: 30px;
  background: rgba(255, 255, 255, 0.3);
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 5px;
  font-family: Bai Jamjuree;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: white;

  &:focus {
    outline: none;
  }

  @media (max-width: 600px) {
    margin: 3px 2px;
    padding: 1px 5px;
    height: 28px;
  }
`

const Label = styled.label`
  margin: 15px 6px;
  height: 20px;
  font-family: Bai Jamjuree;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: white;

  @media (max-width: 600px) {
    margin: 3px 6px;
  }
`

const Register = () => {
  const history = useNavigate()
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    tel: "",
    email: "",
    grade: "ม.6",
    school: "",
    address: "",
    subdistrict: "",
    district: "",
    province: "",
    postcode: "",
    username: "",
    password1: "",
    password2: "",
    image: "",
  })
  const onChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const userInfo = {
    username: values.username,
    password: values.password1,
    email: values.email,
    firstName: values.firstName,
    lastName: values.lastName,
    imageUrl: "https://imgurl.com",
    tel: values.tel,
    grade: values.grade,
    school: values.school,
    address: values.address,
    subdistrict: values.subdistrict,
    district: values.district,
    province: values.province,
    postcode: values.postcode,
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      await apiClient.postRegister(userInfo)
      history("/emailVerify")
    } catch (error: any) {
      alert(error.response.data.message)
    }
  }

  return (
    <div className="registercon">
      <div className="items-center pt-28">
        <form className="formbox pt-5" onSubmit={handleSubmit} id="reg-form">
          <h1 className="regheader">ข้อมูลผู้สมัคร</h1>
          <PersonalInfoForm values={values} email={values.email} onChange={onChange} ids="reg">
            <div className="mt-2 sm:mt-4">
              <div className="register">
                <div className="username">
                  <Label>ชื่อผู้ใช้</Label>
                  <Input type="text" name="username" value={values.username} onChange={onChange} required></Input>
                </div>
                <div className="pwd1">
                  <Label>รหัสผ่าน</Label>
                  <Input type="password" name="password1" value={values.password1} onChange={onChange} required pattern="^[A-Za-z0-9]{8,}$"></Input>
                </div>
                <div className="pwd2">
                  <Label>ยืนยันรหัสผ่าน</Label>
                  <Input type="password" name="password2" value={values.password2} onChange={onChange} required pattern={values.password1}></Input>
                </div>
              </div>
            </div>
          </PersonalInfoForm>
          <div className="rowbutton">
            <Link to={"/login"}>
              <Button textColor="white" outline shadow={false} onClick={() => history("/login")}>
                ยกเลิก
              </Button>
            </Link>
            <Button bg="white" textColor="#9B2C33" outline={false} shadow type="submit" form="reg-form">
              ลงทะเบียน
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
