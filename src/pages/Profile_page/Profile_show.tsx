import "./Profile_show.css"
import {Link} from "react-router-dom"
import { useEffect, useState } from "react";
import { clientInstance } from "../../utils/client";
import { getDate, getMonth, getYear } from "date-fns";
import { HiOutlinePencil } from "react-icons/hi"
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoExitOutline } from "react-icons/io5";


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

    const [order, setOrder] = useState([])

    const arrayChange = ["","มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"]


    useEffect(()=>{
        clientInstance.getUser().then((res)=>{
            setUser(res.data)
            clientInstance.getOrderAll().then((resp)=>{
                setOrder(resp.data.customer?.order)
            });
        })
    },[])    

    console.log(user.profile.imageUrl);
    

    const handleLogout = () =>{
        clientInstance.getLogout();
    }

    return(
        
        <div className="mx-auto w-[704px] text-center" >
            <h1 className="font-bold text-3xl text-white items-center text-center mt-[75px]">โปรไฟล์ของฉัน</h1>
            <img className="inline-block w-[120px] h-[120px] ml-auto mr-[24px] text-center rounded-full mb-[42px] object-cover" src={user.profile.imageUrl} alt="" />
            <div className="inline-block text-white item-center text-left mx-auto mt-[69px] w-[560px] h-[108px] border border-white border-solid box-border pt-[25px] px-[32px] rounded-[12px] bg-white/20">
                {/* <Link to="/Profile_edit"><img className="editIcon" src={edit} alt="edit" /></Link> */}
                
                <div className="font-normal font-medium text-lg leading-[25px] font-BaiJamjuree">
                    {user.profile.firstName}  {user.profile.lastName}
                </div>
                <div className="font-normal font-medium text-lg leading-[25px] font-BaiJamjuree pt-[8px]">
                    {user.email}
                </div>
                <Link to="/Profile_edit"><HiOutlinePencil className="h-[27px] w-[27px] relative left-[465px] top-[-42px]"/></Link>
            </div>
            
            <div className="mt-[45px] text-left text-white font-bold text-2xl leading-[42px]">
                ประวัติการสั่งซื้อ
            </div>
            {order?(
                <div className="h-[170px] mt-[15px] overflow-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-white">
                {order.map((element :{ amount: number,   paidAt: string })=>{
                    const data = Date.parse(element.paidAt) 
                    const Day = getDate(data)
                    const Month = getMonth(data)+1 // need to plus one
                    const Year = getYear(data)
                    return (
                            <div className="bg-white/20 border border-white rounded-[12px] box-border h-[117px] mt-[16px] w-full text-white text-left ">
                                <div className="font-normal font-medium text-lg leading-[25px] font-BaiJamjuree pt-[25px] px-[40px]">
                                    ข้อสอบเก่าสุดเจ๋ง รวมข้อสอบท็อป ๆ มาให้ได้ลองทำ
                                </div>
                                <div className="font-normal font-medium text-lg leading-[25px] font-BaiJamjuree pt-[12px] px-[40px]"> 
                                    คุณได้สั่งซื้อหนังสือเป็นจำนวน {element.amount} เล่มเมื่อวันที่ {Day} {arrayChange[Month]} {Year+543}
                                </div>
                            </div>
                    );
                })}
                </div>
                ):(
                <div className="h-[170px] mt-[15px] overflow-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-white">
                    <div className="bg-white/20 border border-white rounded-[12px] box-border h-[117px] mt-[16px] w-full text-white text-left mt-[0px]">
                        <div className="font-normal font-medium text-lg leading-[25px] font-BaiJamjuree pt-[25px] px-[40px]">
                            คุณยังไม่เคยสั่งซื้อหนังสือ
                        </div>
                        <Link to="">
                            <div className="font-normal font-medium text-lg leading-[25px] font-BaiJamjuree pt-[12px] px-[40px] flex"> 
                                เลือกซื้อตอนนี้เลย !
                                <AiOutlineShoppingCart className="ml-[8px] mt-[3px]"/>
                                {/* <img className="shopIcon" src={shop} alt="" /> */}
                            </div>
                        </Link>
                    </div>
                </div>)}
            
            <Link to="">
                <div className="mt-[64px] text-left text-white font-normal font-medium text-2xl leading-[42px] flex">
                    นโยบายความเป็นส่วนตัว
                </div>
            </Link>
            
            <Link to="/" onClick={handleLogout}>
                <div className="mt-[16px] text-left text-white font-normal font-medium text-2xl leading-[42px] flex">
                    ออกจากระบบ
                    <IoExitOutline className="ml-[8px] mt-[1px]"/>
                    {/* <img className="logoutIcon" src={logout} alt="" /> */}
                </div>
            </Link>
            
        </div>
        
    );

}

export default Profile_show;