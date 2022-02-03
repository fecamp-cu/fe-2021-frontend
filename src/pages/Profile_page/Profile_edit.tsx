import Form from "../../components/Form/Form";
import ReuseForm from "../../components/Form/reuseForm";
import Profile from "../../components/Profile_picture/Profile";
import ProfileEdit from "../../components/Profile_picture/profilePictureEdit";
import back from "./back.png"
import "./Profile_edit.css"
import {Link} from "react-router-dom"
import { useEffect, useState } from "react";
import {clientInstance} from "../../utils/client";
import axios, { AxiosResponse } from "axios";
import { Button } from "../../components/Buttons/Button";


function Profile_edit(){
    const [user, setUser] = useState({
        "id": 0,
        "username": "",
        "email": "",
        "role": "",
        "profile": {
          "id": 0,
          "firstName": "",
          "lastName": "",
          "imageUrl": "",
          "tel": "",
          "grade": "",
          "school": "",
          "address": "",
          "subdistrict": "",
          "district": "",
          "province": "",
          "postcode": ""
        }
      })

    const [values, setValues] = useState({
        "id": 0,
        "firstName": "",
        "lastName": "",
        "imageUrl": "",
        "tel": "",
        "grade": "",
        "school": "",
        "address": "",
        "subdistrict": "",
        "district": "",
        "province": "",
        "postcode": ""
      })
    
    const [image, setImage] = useState<File>();

    useEffect(()=>{
        clientInstance.getUser().then((res)=>{
            setUser(res.data)
            setValues(res?.data.profile)
        })
        
    },[])

    const onChange = (e: any) => {
        setValues({ ...values, [e.target.id]: e.target.value })
    }

    const onChangeImage = (event:any) => {
        const file = event.target.files?.item(0);
        if(file && file.type.substring(0,5) == "image"){
          setImage(file);
        } 
        console.log(file);
    }

    const onSubmit = (e:any) =>{
        e.preventDefault();
        const {id, ...newValues} = values;
        console.log(newValues);
        
        clientInstance.patchProfile(newValues,values.id)
        clientInstance.putProfile(image,values.id)
        
    }


    const testClick = () => {
        
        // console.log("try");
        //     clientInstance.postProfile(values).then((res)=>{
        //         console.log(res);
        //     }).catch(err => console.log("error"))
        
        //clientInstance.getTest();
        //clientInstance.getProfile();
        clientInstance.getUser();
        clientInstance.getOrder(user.id);
    }

    const testLogin = () => {
        clientInstance.postLogin({
            "email": "pattarapon.knot@gmail.com",
            "password": "7v'!Fx]u%eTLibpV"
          });

          console.log("login");
    }
    

    return(
        <div className="editContainer" >
            <Link to="/Profile_show"><img className="backIcon" src={back} alt="" /></Link>
            <h1 className="personalProfile">ข้อมูลส่วนตัว</h1>
            <div className="editPicture">
                <ProfileEdit onChange={onChangeImage} image={image} preview={user.profile.imageUrl}/>
            </div>
            <div className="editForm">
                <ReuseForm onChange={onChange} onSubmit={onSubmit} values={values} email={user.email} ids={"myform"}/>
                <form>
                    <Link to="/Profile_show">
                        <button style={{marginRight:50}}>ยกเลิก</button>
                        
                    </Link>
                    <button type="submit" id="myform" form="myform">
                        บันทึก
                    </button>
                    
                </form>
            </div>
            <button onClick={testClick} style={{marginRight:50}}>Test</button>
            <button onClick={testLogin}>Login</button>
        </div>
    );

}

export default Profile_edit;