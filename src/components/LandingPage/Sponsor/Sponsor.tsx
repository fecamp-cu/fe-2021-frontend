import "./Sponsor.css"
import FECampLogo from "../../../assets/images/FECampLogo.png"
import chulaEngineering from "../../../assets/images/chulaEngineering.jpg"
import chula1 from "../../../assets/images/chula1.jpg"
import chula2 from "../../../assets/images/chula2.png"

function Sponsor() {
    return (
        <div className="sponsor-main-container">
            <h1 className="sponsor-header">ผู้สนับสนุน</h1>
            <div className="sponsor-flex-container">
                <div className="sub-flex1"><img src={FECampLogo} alt="FECamp-logo" className="sponsor-image1" ></img></div>
                <div className="sub-flex2"><img src={chulaEngineering} alt="chulaEngineering" className="sponsor-image2" ></img></div>
                <div className="sub-flex3"><img src={chula1} alt="chula1" className="sponsor-image3" ></img></div>
            </div>
            <div className="sub-flex3-new"><img src={chula2} alt="chula2" className="sponsor-image3-new" ></img></div>
            
        </div>
    );
}

export default Sponsor;