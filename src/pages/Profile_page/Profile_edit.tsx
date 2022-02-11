import Form from "../../components/Form/Form";
import Profile from "../../components/Profile_picture/Profile";
import ProfileEdit from "../../components/Profile_picture/profilePictureEdit";
import back from "./back.png"
import "./Profile_edit.css"
import {Link} from "react-router-dom"
import { useEffect, useState } from "react";
import {clientInstance} from "../../utils/client";
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
    
    console.log(user.profile.imageUrl);
    

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

    const[profile, setProfile] = useState({
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
        console.log(user);
        
        clientInstance.getProfile(14).then((res)=>{
            setProfile(res.data);
            console.log(res.data);
        })
        
    },[])

    const onChange = (e: any) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const onChangeImage = (event:any) => {
        const file = event.target.files?.item(0);
        if(file && file.type.substring(0,5) == "image"){
          setImage(file);
        } 
        console.log(file);
        clientInstance.putProfile(file,values.id)
    }

    const onSubmit = (e:any) =>{
        e.preventDefault();
        const {id, ...newValues} = values;
        console.log(newValues);
        
        clientInstance.patchProfile(newValues,values.id)
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
            <img src={user.profile.imageUrl}></img>
            <Link to="/Profile_show"><img className="backIcon" src={back} alt="" /></Link>
            <h1 className="personalProfile">ข้อมูลส่วนตัว</h1>
            <div className="editPicture">
                <ProfileEdit onChange={onChangeImage} image={image} preview={user.profile.imageUrl}/>
            </div>
            <div className="editForm">
                <Form onChange={onChange} onSubmit={onSubmit} values={values} email={user.email} ids={"myform"}/>
                <form>
                    <Link to="/Profile_show">
                        <Button className="cancelButton" width="157" height="40" fontSize="20" textColor="white" outline shadow={false}>ยกเลิก</Button>
                    </Link>
                    
                    <Button className="saveButton" width="157" height="40" fontSize="20" form = "myform" bg = 'white' textColor='#9B2C33' outline = {false} shadow>บันทึก</Button>
                    
                </form>
            </div>
            <button onClick={testLogin}>Login</button>
        </div>
    );

}

export default Profile_edit;