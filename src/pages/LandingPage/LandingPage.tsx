import About from "../../components/LandingPage/About/About"
import ApplyButton from "../../components/Buttons/ApplyButton";
import Qualifications from "../../components/LandingPage/Qualifications/Qualifications"
import Schedule from "../../components/LandingPage/Schedule/Schedule";
import Sponsor from "../../components/LandingPage/Sponsor/Sponsor"
import icon from "../../assets/images/Icon.png"
import AnchorLink from 'react-anchor-link-smooth-scroll'

import "./LandingPage.css"
import PhotoPreview from "../../components/LandingPage/PhotoPreview/PhotoPreview";
import VideoCamp from "../../components/LandingPage/VideoCamp/VideoCamp";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { landingPageInstance } from "../../utils/client";
import star from "../../assets/images/star.svg"

function LandingPage() {

    const [post, setPost] = useState("");
    const [imgUrlArray, setImgUrlArray] = useState([]);
    const [arraySchedule, setArraySchedule] = useState([]);
    const [qualificationsArray, setQualificationsArray] = useState([]);
    const [sponsorURLArray, setSponsorURLArray] = useState([]);

    useEffect(() => {
        landingPageInstance.getActiveSetting().then((res) => {
          setPost(res?.data.aboutFeContainers[0].text)
          setImgUrlArray(res?.data.photoPreviews.map((e: { imgUrl: string }) => e.imgUrl))
          setArraySchedule(res?.data.timelineEvents)
          setQualificationsArray(res?.data.qualificationPreviews.map((e: { text: string; }) => e.text))
          setSponsorURLArray(res?.data.sponcerContainers.map((e: { imgUrl: string; }) => e.imgUrl))
        })
      },[])


    return(
        <div>
            
            <div className={`top-landing-background`}>
                <Navbar/>
            </div>

            <div className="top-landing-white-bg">
                <div className="landing-apply-button">
                    <Link to={"/register"}><ApplyButton></ApplyButton></Link>
                </div>
                <p className="roo-juk-kai-text">รู้จักค่าย</p>
                <AnchorLink href="#main-info-landing"><img src={icon} alt="icon" className={`icon-image animate-pulse`}></img></AnchorLink>
            </div>
            
            <div className="landing-background" id="main-info-landing">
                <About post={post}/>
                <img className="star-icon" src={star} alt="starIcon"></img>
                <PhotoPreview imgUrlArray={imgUrlArray}/>
                <VideoCamp/>
                <img className="star-icon" src={star} alt="starIcon"></img>
                <Schedule arraySchedule={arraySchedule}/>
                <img className="star-icon" src={star} alt="starIcon"></img>
                <Qualifications qualificationsArray={qualificationsArray}/>
                <img className="star-icon" src={star} alt="starIcon"></img>
                <Sponsor sponsorURLArray={sponsorURLArray}/>
            </div>
        </div>
    );
}

export default LandingPage;