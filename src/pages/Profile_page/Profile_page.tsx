import "./Profile_page.css"
import Profile from "../../components/Profile_picture/Profile";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Buttons/Buttons";

function click(){
    return ;
}

// const isInputNumber = (e:React.KeyboardEvent<HTMLInputElement>)=>{
//     let ch = String.fromCharCode(e.code);
//     if(!(/[0-9]/.test(ch))){
//         e.preventDefault();
//     }
// }

function Page(){
    return(
        <div className="profilePage">
            <div className="navbar">
                <Navbar/>
            </div>
            <h1 className="personal">ข้อมูลส่วนตัว</h1>
            <div className="picture">
                <Profile/>
            </div>
            <div className="formInfo">
                <form style={{marginBottom:22}}>
                    <div className="formRow">
                        <div className="formComponent">
                            <label className="formLabel">ชื่อ</label>
                            <input className="formInput" type="text" placeholder="ชื่อจริง" style={{width: 300}}></input>
                        </div>
                        <div className="formComponent">
                            <label className="formLabel">นามสกุล</label>                            
                            <input className="formInput" type="text" placeholder="นามสกุล" style={{width: 263}}></input>
                        </div>
                    </div>
                    <div className="formRow">
                        <div className="formComponent">
                            <label className="formLabel">เบอร์โทรศัพท์</label>
                            <input className="formInput" type="text" placeholder="เบอร์โทร" maxLength={10} style={{width: 230}}></input>
                        </div>
                        <div className="formComponent">
                            <label className="formLabel">อีเมล</label>
                            <input className="formInput" type="text" placeholder="อีเมล" style={{width: 285}}></input>
                        </div>
                    </div>
                    <div className="formRow">
                        <div className="formComponent">
                            <label className="formLabel">ระดับชั้น</label>
                            <select className="formSelect" style={{width: 144}}>
                                <option value="m4">ม.4</option>
                                <option value="m5">ม.5</option>
                                <option value="m6">ม.6</option>
                                <option value="pwc">ปวช.</option>
                                <option value="p1">ปี1</option>
                                <option value="p2">ปี2</option>
                                <option value="p3">ปี3</option>
                                <option value="other">อื่นๆ</option>
                            </select>
                        </div>
                        <div className="formComponent">
                            <label className="formLabel">โรงเรียน</label>
                            <input className="formInput" type="text" placeholder="โรงเรียน" style={{width: 385}}></input>
                        </div>
                    </div>
                    <div className="formRow">
                        <div className="formComponent">
                            <label className="formLabel">ที่อยู่</label>
                            <input className="formInput" type="text" placeholder="ที่อยู่" style={{width: 407}}></input>
                        </div>
                        <div className="formComponent">
                            <label className="formLabel">แขวง/ตำบล</label>
                            <input className="formInput" type="text" placeholder="แขวง/ตำบล" style={{width: 123}}></input>
                        </div>
                    </div>
                    <div className="formRow">
                        <div className="formComponent">
                            <label className="formLabel">อำเภอ/เขต</label>
                            <input className="formInput" type="text" placeholder="อำเภอ/เขต" style={{width: 126}}></input>
                        </div>
                        <div className="formComponent">
                            <label className="formLabel">จังหวัด</label>
                            <input className="formInput" type="text" placeholder="จังหวัด" style={{width: 155}}></input>
                        </div>
                        <div className="formComponent">
                            <label className="formLabel">รหัสไปรษณีย์</label>
                            <input className="formInput" type="text" placeholder="ไปรษณีย์" maxLength={5} style={{width: 116}}></input>
                        </div>
                    </div>
                </form>
                
                    <Button typeButton="editProfileButton" typeText="redOrangeText" onClick={click}>แก้ไขโปรไฟล์</Button>
                
            </div>
            <h1 className="history">ประวัติการสั่งซื้อ</h1>

            <div>
                <Footer/>
            </div>
        </div>
    );  
}

export default Page;