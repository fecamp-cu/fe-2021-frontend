import "./Profile_page.css"
import Profile from "../../components/Profile_picture/Profile";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import { useState } from "react";



// const isInputNumber = (e:React.KeyboardEvent<HTMLInputElement>)=>{
//     let ch = String.fromCharCode(e.code);
//     if(!(/[0-9]/.test(ch))){
//         e.preventDefault();
//     }
// }

function Profile_page(){
    const [prev, setPrev] = useState({
        firstName : "",
        surName : "",
        tel : "",
        email : "",
        grade : "",
        school : "",
        address : "",
        subdistrict : "",
        district : "",
        province : "",
        postcode : ""
    })

    const [values, setValues] = useState({
        firstName : "",
        surName : "",
        tel : "",
        email : "",
        grade : "",
        school : "",
        address : "",
        subdistrict : "",
        district : "",
        province : "",
        postcode : ""
    })

    const [disableElement,setDisableElement] = useState<boolean>(true);


    const formOnChange= (e : any) =>{
        setValues({...values, [e.target.id] : e.target.value}) 
    }

    function editButtonHandler(){
        setDisableElement(false);
    }

    function saveButtonHandler(){
        setPrev(values);
        setDisableElement(true);
    }
    
    function cancelButtonHandler(){
        setValues(prev);
        setDisableElement(true);
    }

    return(
        <div className="profilePage">
            {/* <div className="navbar">
                <Navbar/>
            </div> */}
            <h1 className="personal">ข้อมูลส่วนตัว</h1>
            <div className="picture">
                <Profile/>
            </div>
            <div className="formInfo">
                <form style={{marginBottom:22}}>
                    <div className="formRow">
                        <div className="formComponent">
                            <label className="formLabel">ชื่อ</label>
                            <input className="formInput" id="firstName" type="text" value={values.firstName} onChange={formOnChange} disabled={disableElement} style={{width: 300}}></input>
                        </div>
                        <div className="formComponent">
                            <label className="formLabel">นามสกุล</label>                            
                            <input className="formInput" id="surName" type="text" value={values.surName} onChange={formOnChange} disabled={disableElement} style={{width: 263}}></input>
                        </div>
                    </div>
                    <div className="formRow">
                        <div className="formComponent">
                            <label className="formLabel">เบอร์โทรศัพท์</label>
                            <input className="formInput" id="tel" type="text" value={values.tel} onChange={formOnChange} maxLength={10} disabled={disableElement} style={{width: 230}}></input>
                        </div>
                        <div className="formComponent">
                            <label className="formLabel">อีเมล</label>
                            <input className="formInput" id="email" type="text" value={values.email} onChange={formOnChange} disabled={disableElement} style={{width: 285}}></input>
                        </div>
                    </div>
                    <div className="formRow">
                        <div className="formComponent">
                            <label className="formLabel">ระดับชั้น</label>
                            <select className="formSelect" id="grade" value={values.grade} onChange={formOnChange} disabled={disableElement} style={{width: 144}}>
                                <option value="ม.4">ม.4</option>
                                <option value="ม.5">ม.5</option>
                                <option value="ม.6">ม.6</option>
                                <option value="ปวช.">ปวช.</option>
                                <option value="ปี1">ปี1</option>
                                <option value="ปี2">ปี2</option>
                                <option value="ปี3">ปี3</option>
                                <option value="อื่นๆ">อื่นๆ</option>
                            </select>
                        </div>
                        <div className="formComponent">
                            <label className="formLabel">โรงเรียน</label>
                            <input className="formInput" id="school" type="text" value={values.school} onChange={formOnChange} disabled={disableElement} style={{width: 385}}></input>
                        </div>
                    </div>
                    <div className="formRow">
                        <div className="formComponent">
                            <label className="formLabel">ที่อยู่</label>
                            <input className="formInput" id="address" type="text" value={values.address} onChange={formOnChange} disabled={disableElement} style={{width: 407}}></input>
                        </div>
                        <div className="formComponent">
                            <label className="formLabel">แขวง/ตำบล</label>
                            <input className="formInput" id="subdistrict" type="text" value={values.subdistrict} onChange={formOnChange} disabled={disableElement} style={{width: 123}}></input>
                        </div>
                    </div>
                    <div className="formRow">
                        <div className="formComponent">
                            <label className="formLabel">อำเภอ/เขต</label>
                            <input className="formInput" id="district" type="text" value={values.district} onChange={formOnChange} disabled={disableElement} style={{width: 126}}></input>
                        </div>
                        <div className="formComponent">
                            <label className="formLabel">จังหวัด</label>
                            <input className="formInput" id="province" type="text" value={values.province} onChange={formOnChange} disabled={disableElement} style={{width: 155}}></input>
                        </div>
                        <div className="formComponent">
                            <label className="formLabel">รหัสไปรษณีย์</label>
                            <input className="formInput" id="postcode" type="text" value={values.postcode} onChange={formOnChange} maxLength={5} pattern="[0-9]{5}" disabled={disableElement} style={{width: 116}}></input>
                        </div>
                    </div>
                    <button type="submit">ส่ง</button>
                </form>
                    {/* {
                        disableElement?<Button typeButton="editProfileButton" typeText="redOrangeText" onClick={editButtonHandler}>แก้ไขโปรไฟล์</Button>:null
                    } */}
                    {/* {
                        !disableElement?<Button typeButton="saveButton" typeText="redOrangeText" onClick={saveButtonHandler}>บันทึก</Button>:null
                    } */}
                    {/* {
                        !disableElement?<Button typeButton="cancelSmallButton" typeText="whiteNormalText" onClick={cancelButtonHandler}>ยกเลิก</Button>:null
                    } */}
                    
            </div>
            {/* {
                !disableElement?<Button typeButton="saveButton" typeText="redOrangeText" onClick={saveButtonHandler}>บันทึก</Button>:null
            } */}
            <h1 className="history">ประวัติการสั่งซื้อ</h1>
            


            {/* <div>
                <Footer/>
            </div> */}
        </div>
    );  
}

export default Profile_page;