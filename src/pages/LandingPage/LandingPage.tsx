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
import {GiPolarStar} from "react-icons/gi"
import { Link } from "react-router-dom";

function LandingPage() {

    return(
        <div>

            <div className="top-landing-background">
            </div>

            <div className="top-landing-white-bg">
                <div className="landing-apply-button">
                    <Link to={"/register"}><ApplyButton></ApplyButton></Link>
                </div>
                <p className="roo-juk-kai-text">รู้จักค่าย</p>
                <AnchorLink href="#main-info-landing"><img src={icon} alt="icon" className={`icon-image animate-pulse`}></img></AnchorLink>
            </div>
            
            <div className="landing-background" id="main-info-landing">
                <About/>
                <GiPolarStar className="star-icon"></GiPolarStar>
                <PhotoPreview/>
                <VideoCamp/>
                <GiPolarStar className="star-icon"></GiPolarStar>
                <Schedule/>
                <GiPolarStar className="star-icon"></GiPolarStar>
                <Qualifications/>
                <GiPolarStar className="star-icon"></GiPolarStar>
                <Sponsor/>
            </div>
        </div>
    );
}

export default LandingPage;