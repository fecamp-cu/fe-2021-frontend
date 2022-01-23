import React from 'react'
import Form from '../../components/Form/reuseForm'
import './Register.css'
import styled from 'styled-components'
import Profile from '../../components/Profile_picture/Profile'
import {Button} from '../../components/Buttons/Button'
import {useState} from 'react'
import {Link} from "react-router-dom"

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

const Register = () =>{
    const [values, setValues] = useState({
        firstName : "",
        surName : "",
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
        password : ""
    })
    const onChange= (e : any) =>{
      setValues({...values, [e.target.id] : e.target.value})
    }
    console.log(values)
    function handleSubmit(e : any){
        e.preventDefault();
    }
    

    return (
        <div className = 'mt-32 items-center'>
            <form className = 'formbox'>
                <div className = 'profile'>
                    <Profile></Profile>
                </div>
                <h1 className = 'regheader'>ข้อมูลผู้สมัคร</h1>  
                <Form value = {values} onChange = {onChange} onSubmit = {handleSubmit} ids = "reg"></Form>
                <div className = 'mt-8 sm:mt-14 mb-8'>
                    <form className = 'register'>
                        <div className = 'username'>
                            <Label>ชื่อผู้ใช้</Label>
                            <Input type = 'text' required></Input>
                        </div>
                        <div className = 'pwd1'>
                            <Label>รหัสผ่าน</Label>
                            <Input type = 'password' required pattern=''></Input>
                        </div>
                        <div className = 'pwd2'>
                            <Label>ยืนยันรหัสผ่าน</Label>
                            <Input type = 'password' required></Input>
                        </div>
                    </form>     
                </div>
                <div className = 'rowbutton'>
                    <Link to = {"/login"}><Button textColor='white' outline shadow = {false}>ยกเลิก</Button></Link>
                    <Button bg = 'white' textColor='#9B2C33' outline = {false} shadow>ลงทะเบียน</Button>
                </div>
            </form>
        </div>
    )
}

export default Register;