import React from 'react'
import Form from '../../components/Form/Form'
import './Register.css'
import styled from 'styled-components'
import Profile from '../../components/Profile_picture/Profile'
import {Button} from '../../components/Buttons/Button'
import {useState} from 'react'
import {Link, useNavigate} from "react-router-dom"
import clientInstance from '../../utils/client'
import { AxiosError } from 'axios'
import Footer from '../../components/Footer/Footer'

const Input = styled.input`
    flex-shrink : 1;
    margin : 5px;
    padding : 1px 10px;
    height : 30px;
    background : rgba(255, 255, 255, 0.3);
    border : 1px solid #FFFFFF;
    box-sizing : border-box;
    border-radius : 5px;
    font-family: Bai Jamjuree;
    font-style : normal;
    font-weight : normal;
    font-size : 14px;
    color : white;

    &:focus{
        outline : none;
    }
    
    @media (max-width : 600px){
        margin : 3px 2px;
        padding : 1px 5px;
        height : 28px;
    }
`

const Label = styled.label`
    margin : 15px 6px; 
    height : 20px;
    font-family: Bai Jamjuree;
    font-style : normal;
    font-weight : normal;
    font-size : 16px;
    line-height : 20px;
    color : white;
    
    @media (max-width : 600px){
        margin : 3px 6px;    
    }
`;
const isLogin = false

const Register = () =>{
    const history = useNavigate();
    const [values, setValues] = useState({
        firstName : "" ,
        lastName : "",
        tel : "",
        email : "",
        grade : "ม.6",
        school : "",
        address : "",
        subdistrict : "",
        district : "",
        province : "",
        postcode : "",
        username : "",
        password1 : "",
        password2 : "",
        image : ""
    })
    const onChange = (e : any) =>{
      setValues({...values, [e.target.id] : e.target.value})
    }
    console.log(values)

    const userInfo = {
        "username": values.username,
        "password": values.password1,
        "email": values.email,
        "firstName": values.firstName,
        "lastName": values.lastName,
        "imageUrl": "https://imgurl.com",
        "tel": values.tel,
        "grade": values.grade,
        "school": values.school,
        "address": values.address,
        "subdistrict": values.subdistrict,
        "district": values.district,
        "province": values.province,
        "postcode": values.postcode
    }

    const handleSubmit = async (e : any) => {
        console.log("Register")
        e.preventDefault();
        try{
            await clientInstance.postRegister(userInfo)
            console.log("register success")
            history('/login')
        }catch(error : any) {
            alert(error.response.data.message)
        }
    }

    return (
        <div className = 'mt-28 items-center'>
            <div className = 'formbox'> 
                <div className = 'profile'>
                    <Profile/> 
                </div>
                <h1 className = 'regheader'>ข้อมูลผู้สมัคร</h1>  
                <Form values = {values} email = {values.email} onChange = {onChange} onSubmit = {handleSubmit} ids = "reg"></Form>
                <div className = 'mt-2 sm:mt-4 mb-8'>
                    <form className = 'register' onSubmit={(e) => e.preventDefault()}>
                        <div className = 'username'>
                            <Label>ชื่อผู้ใช้</Label>
                            <Input type = 'text' id = 'username' value = {values.username} onChange = {onChange} required></Input>
                        </div>
                        <div className = 'pwd1'>
                            <Label>รหัสผ่าน</Label>
                            <Input type = 'password' id = 'password1' value = {values.password1} onChange = {onChange} required pattern = '^[A-Za-z0-9]{8,}$'></Input>
                        </div>
                        <div className = 'pwd2'>
                            <Label>ยืนยันรหัสผ่าน</Label>
                            <Input type = 'password' id = "password2" value = {values.password2} onChange = {onChange} required pattern = {values.password1}></Input>
                        </div>
                    </form>         
                </div>
                <div className = 'rowbutton'>
                    <Link to = {"/login"}><Button textColor='white' outline shadow = {false}>ยกเลิก</Button></Link>
                    <Button form = 'reg' bg = 'white' textColor='#9B2C33' outline = {false} shadow>ลงทะเบียน</Button>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Register;