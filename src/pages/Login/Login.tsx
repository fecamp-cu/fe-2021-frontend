import React from 'react'
import {Link} from "react-router-dom"
import './Login.css'
import {Button} from '../../components/Buttons/Button'
import {FcGoogle} from 'react-icons/fc'
import {AiFillFacebook} from 'react-icons/ai'
import { IconContext } from 'react-icons/lib'
import {useState} from 'react'
import clientInstance from '../../utils/client'
import Redirect  from 'react-router'

const Login = () => {
    const [values, setValues] = useState({
        email : "",
        password : ""
    })
    const onChange= (e : any) =>{
        setValues({...values, [e.target.id] : e.target.value})
      }
    console.log(values)
    const LoginInfo = {
        email : values.email,
        password : values.password
    }

    const handleSubmit = (e : any) => {
        console.log("login")
        e.preventDefault()
        clientInstance.postLogin(LoginInfo).then(res => {
            console.log("login success")
        })
        .catch(error => {
            alert("email or password is incorrect")
        })
    }

    return (
        <div className = 'flex justify-center items-center'>
            <div className = 'loginbox'>
                <h1 className = 'header'>เข้าสู่ระบบ</h1>
                <form className = 'loginform' id = 'loginform' onSubmit={handleSubmit}>
                    <label className = 'label'>อีเมล</label>
                    <input type = 'email' className = 'input' id = 'email' value = {values.email} onChange = {onChange} required></input>
                    <label className = 'label'>รหัสผ่าน</label>
                    <input type = 'password' className = 'input' id = 'password' value = {values.password} onChange = {onChange} required></input>
                    <p className = 'text-white text-sm text-right mx-1.5'>ลืมรหัสผ่าน</p>
                    <div className = 'my-1.5 mx-2.5'>
                        <Button form = 'loginform' bg = 'white' textColor='#9B2C33' outline = {false} shadow>เข้าสู่ระบบ</Button>
                    </div>
                </form>
                <div className = 'loginwith'>
                    <hr className = 'line'></hr>
                    <p className = 'text-white mx-2.5'>เข้าสู่ระบบด้วย</p>
                    <hr className = 'line'></hr>
                </div>
                <div className = 'loginbutton'>
                    <Button Icon = {FcGoogle} bg = 'white' outline = {false} shadow width = '45px' height = '45px' className ='btn'></Button>
                    <div></div>
                    <IconContext.Provider value = {{className : 'fb-icon'}}>
                        <Button Icon = {AiFillFacebook} bg = 'white' outline = {false} shadow width = '45px' height = '45px' className ='btn'></Button>
                    </IconContext.Provider>
                </div>
                <Link to={"/register"} className = 'text-white underline underline-offset-1'>ยังไม่ได้ลงทะเบียนใช่ไหม?</Link>
            </div>
        </div>
    )
}

export default Login;