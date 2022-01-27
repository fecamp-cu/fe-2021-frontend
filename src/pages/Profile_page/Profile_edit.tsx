import Form from "../../components/Form/Form";
import ReuseForm from "../../components/Form/reuseForm";
import Profile from "../../components/Profile_picture/Profile";
import ProfileEdit from "../../components/Profile_picture/profilePictureEdit";
import back from "./back.png"
import "./Profile_edit.css"
import {Link} from "react-router-dom"
import { useState } from "react";
import {clientInstance} from "../../utils/client";


function Profile_edit(){
    const [values, setValues] = useState({
        "firstName": "",
        "lastName": "",
        "tel": "",
        "grade": "ม.6",
        "email": "",
        "school": "",
        "address": "",
        "subdistrict": "",
        "district": "",
        "province": "",
        "postcode": "",
      })
    
    const [image, setImage] = useState<File>();

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

    const onSubmit = (e : any) =>{
        clientInstance.postProfile(values).then((res)=>{
            console.log(res);
        })
    }

    const testClick = () => {
        
        // console.log("try");
        //     clientInstance.postProfile(values).then((res)=>{
        //         console.log(res);
        //     }).catch(err => console.log("error"))
        
        //clientInstance.getTest();
        clientInstance.getProfile();
    }

    const testLogin = () => {
        clientInstance.postLogin({  
            "email": "superadmin@gmail.com",
            "password": "adminadmin"
          });

          console.log("login");
    }
    

    return(
        <div className="editContainer">
            <Link to="/Profile_show"><img className="backIcon" src={back} alt="" /></Link>
            <h1 className="personalProfile">ข้อมูลส่วนตัว</h1>
            <div className="editPicture">
                <ProfileEdit onChange={onChangeImage} image={image}/>
            </div>
            <div className="editForm">
                <ReuseForm onChange={onChange} onSubmit={onSubmit} values={values} ids={"myform"}/>
                <form>
                    <Link to="/Profile_show">
                        <button style={{marginRight:50}}>ยกเลิก</button>
                    </Link>
                    <button type="submit" id="profileSubmit" form="myform">
                        บันทึก
                    </button>
                    
                </form>
            </div>
            <button onClick={testClick}>Test</button>
            <button onClick={testLogin}>Login</button>
        </div>
    );

}

export default Profile_edit;