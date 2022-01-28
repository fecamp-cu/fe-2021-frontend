import "./Sponsor.css"

function Sponsor() {
    return (
        <div className="sponsor-main-container">
            <h1 className="sponsor-header">ผู้สนับสนุน</h1>

            <div className="sponsor-picture-main-container">
                <div className="sponsor-flex-container">
                    <img src="https://scontent.fbkk22-3.fna.fbcdn.net/v/t39.30808-6/269973055_4857562887628335_2178051009880770882_n.png?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=2gMRnw9w9cEAX8XQiFl&_nc_oc=AQmk8JsSzId89Uq1K0VxOJP2SB5qb2z6u6hOjysz7wSMzCUhwEc-6lQ-e5ehl0TTgEpR5FkuzDWt_8RT6U8ASKHY&_nc_ht=scontent.fbkk22-3.fna&oh=00_AT_fKxnLbIh8KNTnlex4oB53_2IMeNpLb04TgPzLoR-FCg&oe=61F7364E" alt="FECamp-logo" className="sponsor-image1" ></img>
                    <img src="http://www.cusc.chula.ac.th/wordpress/wp-content/uploads/2021/12/LOGO-Chula-New2564-1024x400.jpg" alt="chula" className="sponsor-image2" ></img>
                </div>
                <div className="sponsor-container-2"><img src="https://www.eng.chula.ac.th/wp-content/uploads/2017/03/Logo.jpg" alt="chulaEngineering" className="sponsor-image3" ></img></div>
            </div>

        </div>
    );
}

export default Sponsor;