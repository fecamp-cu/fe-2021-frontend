import Form from "../../components/Form/Form";
import ReuseForm from "../../components/Form/reuseForm";
import Profile from "../../components/Profile_picture/Profile";
import back from "./back.png"
import "./Profile_edit.css"
import {Link} from "react-router-dom"



function Profile_edit(){
    const handleSubmit = (e : any) =>{
        e.preventDefault()
    }
    return(
        <div className="editContainer">
            <Link to="/Profile_show"><img className="backIcon" src={back} alt="" /></Link>
            <h1 className="personalProfile">ข้อมูลส่วนตัว</h1>
            <div className="editPicture">
                <Profile/>
            </div>
            <div className="editForm">
                <ReuseForm onSubmit={handleSubmit}/>
            </div>
        </div>
    );

}

export default Profile_edit;