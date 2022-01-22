import activityPic from "../../../assets/images/activityPic.png"
import "./About.css"

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function About() {
    return (
        <div id="about-landingPage-content">

            <h1 className="topic-text">FE camp คืออะไร</h1>

            <p className="about-text">FECamp (อ่านว่า เอฟ-อี-แคมป์ ย่อมาจาก Fundamental Engineering Camp) 
            เป็นค่ายติวความถนัดทางวิศวกรรม ที่จัดขึ้นโดยพี่ๆ คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย 
            โดยค่ายนี้จะรับน้องๆ ม.5 ที่กำลังจะขึ้น ม.6 (ที่จะสอบในปีถัดไป) จากทุกโรงเรียนทั่วประเทศ </p>
            

            <h1 className="topic-text2">ภาพกิจกรรม</h1>
{/* 
            <Carousel>
                <div>
                    
                </div>
            </Carousel> */}

            {/* <div className="img-container">
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
            </div> */}

            <div className="video-container">
                <div className="video-text">คลิปเปิดค่าย Jailbreak by FeCampX - FECamp Chula</div>
                <iframe className="video-camp" src="https://www.youtube.com/embed/0OCyTBaPiYc"></iframe>
            </div>


        </div>
    );
}

export default About;