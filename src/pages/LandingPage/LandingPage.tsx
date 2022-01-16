import About from "../../components/LandingPage/About/About"
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/Buttons/Buttons";
import "./LandingPage.css"

function LandingPage() {
    const clickButton = () => {
        return null;
    }

    return(
        <div>
            <div className="top-landing-container">
                <div className="top-landing-background">
                    
                </div>
                <div className="apply-button-landing-page">
                    <Button typeButton="applyButton" typeText="applyText" onClick={clickButton}>สมัครค่าย</Button>
                </div>
            </div>

            <div className="landing-background">
                <About/>
            </div>
        </div>
    );
}

export default LandingPage;