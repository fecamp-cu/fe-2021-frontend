import About from "../../components/LandingPage/About/About"
import Footer from "../../components/Footer/Footer"
import "./LandingPage.css"

function LandingPage() {
    return(
        <div>
            <div className="background">
                <About/>
            </div>
            <Footer/>
        </div>
    );
}

export default LandingPage;