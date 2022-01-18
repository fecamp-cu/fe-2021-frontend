import About from "../../components/LandingPage/About/About"
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar";
import ApplyButton from "../../components/Buttons/ApplyButton";
import Qualifications from "../../components/LandingPage/Qualifications/Qualifications"
import Schedule from "../../components/LandingPage/Schedule/Schedule";
import icon from "../../assets/images/Icon.png"
import "./LandingPage.css"

function LandingPage() {
    const clickButton = () => {
        return null;
    }

    return(
        <div>
            <div className="top-landing-container">
                <div className="top-landing-background">
                    <div className="blocking-container">
                        <div className="apply-button-landing-page">
                            <ApplyButton onClick={clickButton}></ApplyButton>
                        </div>
                        <p className="roo-juk-kai-text">รู้จักค่าย</p>
                        <img src={icon} alt="icon" className={`icon-image animate-pulse`}></img>
                    </div>
                </div>
                
            </div>
            
            <div className="landing-background">
                <About/>
                <Schedule/>
                <Qualifications/>
            </div>
        </div>
    );
}

export default LandingPage;