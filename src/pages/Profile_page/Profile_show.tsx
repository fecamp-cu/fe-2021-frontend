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
import { getDate, getMonth, getYear } from "date-fns";


function Profile_show(){

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

    const [error, setError] = useState()
    const [order, setOrder] = useState([])

    const arrayChange = ["","มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"]

    // const data = Date.parse(order.paidAt) 
    // const Day = getDate(data)
    // const Month = getMonth(data)+1 // need to plus one
    // const Year = getYear(data)


    useEffect(()=>{
        clientInstance.getUser().then((res)=>{
            setUser(res.data)
            clientInstance.getOrderAll().then((resp)=>{
                setOrder(resp.data)
            }).catch(err => {setError(err)});
        })
        console.log(user.id);
    },[])    

    const handleLogout = () =>{
        clientInstance.getLogout();
    }

    return(
        <div className="showContainer" >
            <h1 className="myProfile">โปรไฟล์ของฉัน</h1>
            {/* <div className="picture">
                
            </div> */}
            <img className="picture" src={user.profile.imageUrl} alt="" />
            <div className="infoProfile">
                <Link to="/Profile_edit"><img className="editIcon" src={edit} alt="edit" /></Link>
                <div className="name">
                    {user.profile.firstName}  {user.profile.lastName}
                </div>
                <div className="email">
                    {user.email}
                </div>
            </div>
            
            <div className="history">
                ประวัติการสั่งซื้อ
            </div>
            {!error?(
                // <div className="historyFrame">
                //     <div className="infoHistory" style={{marginTop:0}}>
                //         <div className="historyList">
                //             ข้อสอบเก่าสุดเจ๋ง รวมข้อสอบท็อป ๆ มาให้ได้ลองทำ
                //         </div>
                //         <div className="historyBuy"> 
                //             คุณได้สั่งซื้อหนังสือเป็นจำนวน {order.amount} เล่มเมื่อวันที่ {Day} {arrayChange[Month]} {Year+543}
                //         </div>
                //     </div>
                // </div>
                <div className="historyFrame">
                {order.map((element :{ amount: number,   paidAt: string })=>{
                    const data = Date.parse(element.paidAt) 
                    const Day = getDate(data)
                    const Month = getMonth(data)+1 // need to plus one
                    const Year = getYear(data)
                    return (
                        
                            <div className="infoHistory" style={{marginTop:10}}>
                                <div className="historyList">
                                    ข้อสอบเก่าสุดเจ๋ง รวมข้อสอบท็อป ๆ มาให้ได้ลองทำ
                                </div>
                                <div className="historyBuy"> 
                                    คุณได้สั่งซื้อหนังสือเป็นจำนวน {element.amount} เล่มเมื่อวันที่ {Day} {arrayChange[Month]} {Year+543}
                                </div>
                            </div>
                    );
                })}
                </div>
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
            
            <Link to="">
                <div className="policy">
                    นโยบายความเป็นส่วนตัว
                </div>
            </Link>
            
            <Link to="/" onClick={handleLogout}>
                <div className="logout">
                    ออกจากระบบ
                    <img className="logoutIcon" src={logout} alt="" />
                </div>
            </Link>
            
        </div>
    );

}

export default Profile_show;