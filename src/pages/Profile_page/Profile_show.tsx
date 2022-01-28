import Profile from "../../components/Profile_picture/Profile";
import "./Profile_show.css"
import edit from "./Icon.png"
import logout from "./Logout.png"
import shop from "./shop.png"
import { PDFView } from "../../components/PDFView/PDFView";
import {Link} from "react-router-dom"
import { useEffect, useState } from "react";
import { clientInstance } from "../../utils/client";
import { AxiosResponse } from "axios";


function Profile_show(){
    const buyHistory = [
        {value:"Hi"},
        {value:"Hi"},
        {value:"Hi"},
    ];

    const [values, setValues] = useState({
        "firstName": "",
        "lastName": "",
        "imageUrl": "https://imgurl.com",
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

    useEffect(()=>{
        clientInstance.getProfile().then((res:AxiosResponse)=>{
            setValues(res.data)
        })
    },[])

    const isHistory = false;

    return(
        <div className="showContainer">
            <h1 className="myProfile">โปรไฟล์ของฉัน</h1>
            {/* <div className="picture">
                
            </div> */}
            <img className="picture" src={values.imageUrl} alt="" />
            <div className="infoProfile">
                <Link to="/Profile_edit"><img className="editIcon" src={edit} alt="edit" /></Link>
                <div className="name">
                    {values.firstName}  {values.lastName}
                </div>
                <div className="email">
                    email
                </div>
            </div>
            
            <div className="history">
                ประวัติการสั่งซื้อ
            </div>
            {isHistory?(
                <div className="historyFrame">{buyHistory.map(history=>(
                    <div className="infoHistory">
                        <div className="historyList">
                            {history.value}
                        </div>
                    </div>
                ))}</div>
                ):(
                <div className="historyFrame">
                    <div className="infoHistory" style={{marginTop:0}}>
                        <div className="historyList">
                            คุณยังไม่เคยสั่งซื้อหนังสือ
                        </div>
                        <Link to="">
                            <div className="historyBuy"> 
                                เลือกซื้อตอนนี้เลย !
                                <img className="shopIcon" src={shop} alt="" />
                            </div>
                        </Link>
                    </div>
                </div>)}
            {/* <div className="historyFrame">
                <div className="infoHistory" style={{marginTop:0}}>
                    <div className="historyList">
                        คุณยังไม่เคยสั่งซื้อหนังสือ
                    </div>
                    <Link to="">
                        <div className="historyBuy"> 
                            เลือกซื้อตอนนี้เลย !
                            <img className="shopIcon" src={shop} alt="" />
                        </div>
                    </Link>
                </div>
                {buyHistory.map(history=>(
                    <div className="infoHistory">
                        <div className="historyList">
                            {history.value}
                        </div>
                    </div>
                ))}
                
            </div> */}
            <Link to="">
                <div className="policy">
                    นโยบายความเป็นส่วนตัว
                </div>
            </Link>
            
            <Link to="/">
                <div className="logout">
                    ออกจากระบบ
                    <img className="logoutIcon" src={logout} alt="" />
                </div>
            </Link>
            
        </div>
    );

}

export default Profile_show;