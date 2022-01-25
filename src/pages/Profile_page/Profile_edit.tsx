import Form from "../../components/Form/Form";
import ReuseForm from "../../components/Form/reuseForm";
import Profile from "../../components/Profile_picture/Profile";
import back from "./back.png"
import "./Profile_edit.css"
import {Link} from "react-router-dom"
import { useState } from "react";
import clientInstance from "../../utils/client";


function Profile_edit(){
    const [values, setValues] = useState({
        firstName: "",
        surName: "",
        tel: "",
        email: "",
        grade: "ม.6",
        school: "",
        address: "",
        subdistrict: "",
        district: "",
        province: "",
        postcode: "",
      })
      const onChange = (e: any) => {
        setValues({ ...values, [e.target.id]: e.target.value })
      }

    const onSubmit = (e : any) =>{
        try{
            console.log("try");
            clientInstance.postProfile(values);
        }catch{
            console.log("catch");
            
        }
    }

    const testClick = (e:any) => {
        try{
            console.log("try");
            clientInstance.getProfile();
        }catch{
            console.log("catch");
            
        }
        
    }

    return(
        <div className="editContainer">
            <Link to="/Profile_show"><img className="backIcon" src={back} alt="" /></Link>
            <h1 className="personalProfile">ข้อมูลส่วนตัว</h1>
            <div className="editPicture">
                <Profile/>
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
        </div>
    );

}

export default Profile_edit;