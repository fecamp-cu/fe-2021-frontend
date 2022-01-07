import PropTypes, { string } from "prop-types";
import { useState } from "react";
import "./Navbar.css";

function Navbar(props:any) {
  const { isLogin, atPage } = props;
  function EnterTheLesson(isLogin:boolean) {
    if (isLogin) {
      return (
        <li className="nav-item">
          <a className="nav-link active" href="#" id="enterTheLesson">
            เข้าสู่บทเรียน
          </a>
        </li>
      );
    }
  }

  const [hasDropdown, setHasDropDown] = useState(false);

  function clickPage(event:any) {
    console.log("click");
    if (hasDropdown == true){
        return setHasDropDown(false);
    }
    return setHasDropDown(true);
    //   window.location.reload();
  }

  function Profile(isLogin:boolean) {
    if (isLogin) {
      return (
        <div>
          <li className="nav-item">
            <img
              className="rounded-circle"
              src="hqdefault.jpg"
              alt=""
              id="userPic"
            ></img>
          </li>
          <li className="nav-item">
            <a
              className="nav-link active"
              href="#"
              id="userName"
              onClick={clickPage}
            >
              {props.userName}
            </a>
          </li>
        </div>
      );
    }
    return (
      <div>
        <li className="nav-item">
          <a className="nav-link active" href="#" id="userName">
            เข้าสู่ระบบ
          </a>
        </li>
      </div>
    );
  }

  function register(isLogin:boolean) {
    if (isLogin) {
      return (
        <li className="nav-item">
          <a className="nav-link active" href="#" id="register-Login">
            สมัครค่าย
          </a>
        </li>
      );
    }
    return (
      <li className="nav-item">
        <a className="nav-link active" href="#" id="register-UnLogin">
          สมัครค่าย
        </a>
      </li>
    );
  }

  function selectBar(atPage:string) {
    if (atPage == "Default") {
      return;
    } else if (atPage == "shop") {
      return (
        <svg
          style={{
            position: "absolute",
            width: "90px",
            height: "2px",
            left: "366px",
            top: "49px",
            background: "#FFFFFF",
          }}
        ></svg>
      );
    } else if (atPage == "home") {
      return (
        <svg
          style={{
            position: "absolute",
            width: "67px",
            height: "2px",
            left: "269px",
            top: "49px",
            background: "#FFFFFF",
          }}
        ></svg>
      );
    }
  }

  function showDropDown(hasDropdown:boolean) {
    if (hasDropdown) {
      return (
        <div id="dropDown">
          <a className="nav-link active" href="#" id="personal-info">
            ข้อมูลส่วนตัว
          </a>
          <svg width="144" height="0" id="vertical-bar"></svg>
          <a className="nav-link active" href="#" id="logout">
            ออกจากระบบ
          </a>
        </div>
      );
    }
    return;
  }

  return (
    <div id="navContainer">
        <div id="P-navbar">
          <svg width="199" height="40" id="logo"></svg>
          {selectBar(atPage)}
          <ul id="nav-table">
            <li className="nav-item">
              <a className="nav-link active" href="#" id="homePage">
                หน้าแรก
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#" id="shop">
                ร้านหนังสือ
              </a>
            </li>
            {EnterTheLesson(isLogin)}
            {register(isLogin)}
            {Profile(isLogin)}
          </ul>
        </div>
        {showDropDown(hasDropdown)}
    </div>
  );
}

Navbar.propTypes = {
  userName: PropTypes.string,
  isLogin: PropTypes.bool,
  atPage: PropTypes.string,
  hasDropdown: PropTypes.bool,
};

Navbar.defaultProps = {
  userName: "นายขยันอะ",
  isLogin: false,
  atPage: "Default",
  hasDropdown: false,
};

export default Navbar;
