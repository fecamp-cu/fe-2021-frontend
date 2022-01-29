import "./Sponsor.css"

function Sponsor(props : { sponsorURLArray : Array<string> } ) {

    return (
        <div className="sponsor-main-container">
            <h1 className="sponsor-header">ผู้สนับสนุน</h1>

            <div className="sponsor-picture-main-container">
                <div className="sponsor-flex-container">
                    <img src={props.sponsorURLArray[0]} alt="FECamp-logo" className="sponsor-image1" ></img>
                    <img src={props.sponsorURLArray[1]} alt="chula" className="sponsor-image2" ></img>
                </div>
                <div className="sponsor-container-2"><img src={props.sponsorURLArray[2]} alt="chulaEngineering" className="sponsor-image3" ></img></div>
            </div>

        </div>
    );
}

export default Sponsor;