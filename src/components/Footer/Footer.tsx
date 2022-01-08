import "./Footer.css";
import facebookLogo from "../../assets/images/facebook.png";
import instagramLogo from "../../assets/images/instagram.png";
import youtubeLogo from "../../assets/images/Subtract.png";

function Footer() {
  return (
    
    <div className="container">
      <div className="sub-container1">
        <div className="sub1-column1">
          <h1 className="faculty-text">
            คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย
          </h1>

          <h2 className="address-text">
            254 ถนนพญาไท แขวงวังใหม่ เขตปทุมวัน กรุงเทพมหานคร 10330
          </h2>
        </div>

        <div className="sub1-column2">
          <div className="icons">
          <img src={facebookLogo} alt="facebook-logo" className="image"></img>
          <img src={instagramLogo} alt="instagram-logo" className="image"></img>
          <img src={youtubeLogo} alt="youtube-logo" className="image"></img>
          </div>
        </div>
      </div>

      <div className="line"></div>

      <div className="sub-container2">
        <div className="sub2-column1">
          <div className="rectangle"></div>
        </div>

        <div className="sub2-column2">
          <div className="english-text">
            <p className="eng1">Fundamental Engineering</p>
            <p className="eng2">Stimulation Test 15 | 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
