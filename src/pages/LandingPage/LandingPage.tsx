import About from "../../components/LandingPage/About/About"
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar";
import ApplyButton from "../../components/Buttons/ApplyButton";
import Qualifications from "../../components/LandingPage/Qualifications/Qualifications"
import Schedule from "../../components/LandingPage/Schedule/Schedule";
import Sponsor from "../../components/LandingPage/Sponsor/Sponsor"
import icon from "../../assets/images/Icon.png"
import "./LandingPage.css"

function LandingPage() {
    const clickButton = () => {
        return null;
    }

    return(
        <div>

            <div className="top-landing-background">
            </div>

            <div className="top-landing-white-bg">
                <div className="landing-apply-button">
                    <ApplyButton onClick={clickButton}></ApplyButton>
                </div>
                <p className="roo-juk-kai-text">รู้จักค่าย</p>
                <img src={icon} alt="icon" className={`icon-image animate-pulse`}></img>
            </div>
            
            <div className="landing-background">
                <About/>
                <Schedule/>
                <Qualifications/>
                <Sponsor/>
            </div>
        </div>
    );
}

export default LandingPage;