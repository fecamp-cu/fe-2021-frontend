import Profile from "../../components/Profile_picture/Profile";
import "./Profile_show.css"
import edit from "./Icon.png"
import logout from "./Logout.png"


function Profile_show(){
    return(
        <div className="showContainer">
            <h1 className="myProfile">โปรไฟล์ของฉัน</h1>
            <div className="picture">
                <Profile/>
            </div>
            <div className="infoProfile">
                <img className="editIcon" src={edit} alt="edit" />
                <div className="name">
                    ชื่อ นามสกุล
                </div>
                <div className="email">
                    email
                </div>
            </div>
            
            <div className="history">
                ประวัติการสั่งซื้อ
            </div>
            <div className="infoHistory">
                <div className="historyList">
                    คุณยังไม่ซื้อหนังสือ
                </div>
            </div>

            <div className="policy">
                นโยบายความเป็นส่วนตัว
            </div>
            <div className="swapAccount">
                สลับบัญชี
            </div>
            <div className="logout">
                ออกจากระบบ
            </div>
            <img className="logoutIcon" src={logout} alt="" />
        </div>
    );

}

export default Profile_show;