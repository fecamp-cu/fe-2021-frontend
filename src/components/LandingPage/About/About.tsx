import activityPic from "../../../assets/images/activityPic.png"
import "./About.css"

function About() {
    return (
        <div>

            <h1 className="topic-text">FE camp คืออะไร</h1>

            <div className="p-container">
                    <p className="about-text">ครับ สำหรับท่านที่เดินผ่านไปผ่านมา</p>
                    <p className="about-text">วันนี้เฉาก๊วยชากังราวได้มาบริการท่านพ่อแม่พี่น้องกันอีกแล้วนะครับ</p> 
                    <p className="about-text">อากาศร้อนๆอย่างนี้นะครับ เฉาก๊วยสักถ้วยชื่นใจ แม้อากาศไม่ร้อนก็ทานกันได้นะครับ</p> 
                    <p className="about-text">เฉาก๊วยชากังราวนั้นทานได้ทุกฤดูกาลนะครับ นอกจากเฉาก๊วยชากังราวจะอร่อยแล้ว</p>
                    <p className="about-text">ก็ยังมีประโยชน์ต่อร่างกายอีกมากมาย เช่น แก้ร้อนใน แก้ไข้หวัด ลดความดันโลหิตสูง </p>
                    <p className="about-text">แก้กล้ามเนื้ออักเสบ ข้ออักเสบ ตับอักเสบ แล้วก็เบาหวาน</p>
            </div>
            

            <h1 className="topic-text2">ภาพกิจกรรม</h1>

            <div className="img-container">
                <div className="row-image">
                    <img className="activity-image" src={activityPic} alt="activity-pic"></img>
                    <img className="activity-image" src={activityPic} alt="activity-pic"></img>
                    <img className="activity-image" src={activityPic} alt="activity-pic"></img>
                    <img className="activity-image" src={activityPic} alt="activity-pic"></img>
                    <img className="activity-image" src={activityPic} alt="activity-pic"></img>
                </div>
                
                <div className="row-image">
                    <img className="activity-image2" src={activityPic} alt="activity-pic"></img>
                    <img className="activity-image2" src={activityPic} alt="activity-pic"></img>
                    <img className="activity-image2" src={activityPic} alt="activity-pic"></img>
                    <img className="activity-image2" src={activityPic} alt="activity-pic"></img>
                    <img className="activity-image2" src={activityPic} alt="activity-pic"></img>
                </div>
            </div>

            <div className="video-container">
                <iframe className="video-camp" src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe>
                <div className="video-text">คลิปเปิดค่าย Jailbreak by FeCampX - FECamp Chula</div>
            </div>


        </div>
    );
}

export default About;