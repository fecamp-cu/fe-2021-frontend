import "./About.css"
import activity1 from '../../../assets/images/activity1.jpg'
import activity2 from '../../../assets/images/activity2.jpg'
import activity3 from '../../../assets/images/activity3.jpg'
import activity4 from '../../../assets/images/activity4.jpg'
import activity5 from '../../../assets/images/activity5.jpg'
import activity6 from '../../../assets/images/activity6.jpg'
import activity7 from '../../../assets/images/activity7.jpg'
import activity8 from '../../../assets/images/activity8.jpg'
import activity9 from '../../../assets/images/activity9.jpg'
import activity10 from '../../../assets/images/activity10.jpg'

import '../../../../node_modules/tw-elements/dist/css/index.min.css';
import '../../../../node_modules/tw-elements/dist/js/index.min.js';

function ActivitySlide() {

  const image_src = [activity2,activity3,activity4,activity5,
    activity6,activity7,activity8,activity9,activity10
  ]

  return (
  <div id="carouselExampleIndicators" className="carousel slide relative" data-bs-ride="carousel">
    <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
      <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="0"
      className="active"
      aria-current="true"
      aria-label="Slide 1"
      ></button>

      {[...Array(9)].map((e,i) => {
      return( <button key={i}
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to={`${i+1}`}
        aria-label={`Slide ${i+2}`}
      ></button>
      );
      })}
  </div>

  <div className="carousel-inner relative w-full overflow-hidden">
    <div className="carousel-item active float-left w-full">
      <img
        src={activity1}
        className="block w-full"
        alt="activityImage"
      />
    </div>

    {image_src.map((e,i) => {
      return( 
      <div key={i} className="carousel-item float-left w-full">
      <img
        src={e}
        className={`block w-full`}
        alt="activityImage"
      />
      </div>
      );
      })}
   
  </div>

  <button
    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>

  <button
    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>

</div>
   
  )
}

function About() {
  return (
    <div id="about-landingPage-content">
      <h1 className="topic-text">FE camp คืออะไร</h1>

      <p className="about-text">
        FECamp (อ่านว่า เอฟ-อี-แคมป์ ย่อมาจาก Fundamental Engineering Camp) เป็นค่ายติวความถนัดทางวิศวกรรม ที่จัดขึ้นโดยพี่ๆ คณะวิศวกรรมศาสตร์
        จุฬาลงกรณ์มหาวิทยาลัย โดยค่ายนี้จะรับน้องๆ ม.5 ที่กำลังจะขึ้น ม.6 (ที่จะสอบในปีถัดไป) จากทุกโรงเรียนทั่วประเทศ{" "}
      </p>

      <h1 className="topic-text2">ภาพกิจกรรม</h1>

      <ActivitySlide />

      <div className="video-container">
        <div className="video-text">คลิปเปิดค่าย Jailbreak by FeCampX - FECamp Chula</div>
        <iframe className="video-camp" src="https://www.youtube.com/embed/0OCyTBaPiYc"></iframe>
      </div>
    </div>
  )
}

export default About
