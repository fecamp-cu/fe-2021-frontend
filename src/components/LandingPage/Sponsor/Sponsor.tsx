import "./Sponsor.css"
import FECampLogo from "../../../assets/images/FECampLogo.png"

function Sponsor() {
    return (
        <div>
            <h1 className="sponsor-header">ผู้สนับสนุน</h1>
            <div className="sponsor-flex-container">
                <div className="sub-flex"><img src={FECampLogo} alt="FECamp-logo" className="sponsor-image1" style={{order:1}}></img></div>
                
                <div className="sub-flex"><img src={FECampLogo} alt="FECamp-logo" className="sponsor-image2" style={{order:2}}></img></div>
                <div className="sub-flex"><img src={FECampLogo} alt="FECamp-logo" className="sponsor-image3" style={{order:3}}></img></div>
            </div>
            
        </div>
    );
}

export default Sponsor;