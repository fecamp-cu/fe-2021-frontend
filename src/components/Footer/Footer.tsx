import "./Footer.css";
import {FaFacebookSquare} from "react-icons/fa"
import {FaInstagramSquare} from "react-icons/fa"
import {FaYoutubeSquare} from "react-icons/fa"

function Footer() {
  return (
    
    <div className="footer-container">
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

          <a href="https://th-th.facebook.com/fecampchula/" target="_blank">
            <FaFacebookSquare className="image-footer"></FaFacebookSquare>
          </a>
          <a href="https://www.instagram.com/fecampcu/" target="_blank">
            <FaInstagramSquare className="image-footer"></FaInstagramSquare>
          </a>
          <a href="https://www.youtube.com/channel/UCzAKRq31Xm-lqcP4ZkI5ZSg" target="_blank">
            <FaYoutubeSquare className="image-footer"></FaYoutubeSquare>
          </a>
          
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
