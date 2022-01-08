import PropTypes, { string } from "prop-types"
import { useState } from "react"
import "./Navbar.css"

function Navbar(props: any) {
  const { isLogin, atPage } = props
  function EnterTheLesson(isLogin: boolean) {
    if (isLogin) {
      return (
        <li className="nav-item">
          <a className="nav-link active" href="#" id="enterTheLesson">
            เข้าสู่บทเรียน
          </a>
        </li>
      )
    }
  }

  const [hasDropdown, setHasDropDown] = useState(false)

  function clickPage(event: any) {
    console.log("click")
    if (hasDropdown == true) {
      return setHasDropDown(false)
    }
    return setHasDropDown(true)
    //   window.location.reload();
  }

  function Profile(isLogin: boolean) {
    if (isLogin) {
      return (
        <div>
          <li className="nav-item">
            <img className="rounded-circle" src="hqdefault.jpg" alt="" id="userPic"></img>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#" id="userName" onClick={clickPage}>
              {props.userName}
            </a>
          </li>
        </div>
      )
    }
    return (
      <div>
        <li className="nav-item">
          <a className="nav-link active" href="#" id="userName">
            เข้าสู่ระบบ
          </a>
        </li>
      </div>
    )
  }

  function register(isLogin: boolean) {
    if (isLogin) {
      return (
        <li className="nav-item">
          <a className="nav-link active" href="#" id="register-Login">
            สมัครค่าย
          </a>
        </li>
      )
    }
    return (
      <li className="nav-item">
        <a className="nav-link active" href="#" id="register-UnLogin">
          สมัครค่าย
        </a>
      </li>
    )
  }

  function selectBar(atPage: string) {
    if (atPage == "Default") {
      return
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
      )
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
      )
    }
  }

  // function showDropDown(hasDropdown: boolean) {
  //   if (hasDropdown) {
  //     return (
  //       <div className="float-end" id="dropDown">
  //         <a className="nav-link active" href="#" id="personal-info">
  //           ข้อมูลส่วนตัว
  //         </a>
  //         <svg width="144" height="0" id="vertical-bar"></svg>
  //         <a className="nav-link active" href="#" id="logout">
  //           ออกจากระบบ
  //         </a>
  //       </div>
  //     )
  //   }
  //   return
  // }

  // -------------------------------------------------------------

  function showPictureProfile(isLogin: boolean) {
    if (isLogin&& !hasDropdown) {
      return <img className="rounded-circle d-inline-flex me-2" src="" width={50} height={50} alt="" id="picture"></img>
    }
  }

  function showEnterTheLesson(isLogin: boolean) {
    if (isLogin) {
      return (
        <li className="nav-item"><a className="pt-1 me-4" href="#" id="element">เข้าสู่บทเรียน</a></li>
      )
    }
  }

  function showDropDown(isLogin: boolean) {
    if (isLogin) {
      return (
        <ul className="dropdown-menu mt-4" id="color-navbar">
          <li>
            <a className="dropdown-item ms-2" href="#">
              ข้อมูลส่วนตัว
            </a>
            <hr></hr>
            <a className="dropdown-item ms-2" href="#">
              ออกจากระบบ
            </a>
          </li>
        </ul>
      )
    }
  }

  function underlineHomePage(atPage:string){
    if(atPage=="home"){
      return " border-bottom"
    }
    return ""
  }

  function underlineShop(atPage:string){
    if(atPage=="shop"){
      return " border-bottom"
    }
    return ""
  }

  function setProfileCenter(hasDropdown:boolean){
    if(hasDropdown){
      return ""
    }
    return " d-inline-flex"
  }

  function showLogin(isLogin:boolean){
    if(isLogin){
      return (
        <a className={"pt-1 me-4"+setProfileCenter(hasDropdown)} data-bs-toggle="dropdown" id="profile">
                นายขยันอะ
              </a>
      )
    }
    return <a className={"pt-1 me-4"+setProfileCenter(hasDropdown)} data-bs-toggle="dropdown" id="profile">
    เข้าสู่ระบบ
  </a>
  }


  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-dark" id="color-navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{height: "72px", width:"15%"}}>
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={clickPage}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav list-inline me-auto justify-content-star">
            <li className="nav-item">
              <a className={"pt-1 me-4"+underlineHomePage(atPage)} href="#" id="element">
                หน้าแรก
              </a>
            </li>
            <li className="nav-item">
              <a className={"pt-1 me-4"+underlineShop(atPage)} href="#" id="element">
                ร้านหนังสือ
              </a>
            </li>
            {showEnterTheLesson(isLogin)}
          </ul>
          <ul className="navbar-nav list-inline justify-content-end">
            <li className="nav-item">
              <a className="pt-1 me-4" href="#" id="element">
                สมัครค่าย
              </a>
            </li>
            <li className="nav-item dropdown">
              {showPictureProfile(isLogin)}
              {showLogin(isLogin)}
              {showDropDown(isLogin)}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )

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
  )
}

Navbar.propTypes = {
  userName: PropTypes.string,
  isLogin: PropTypes.bool,
  atPage: PropTypes.string,
  hasDropdown: PropTypes.bool,
}

Navbar.defaultProps = {
  userName: "นายขยันอะ",
  isLogin: false,
  atPage: "Default",
  hasDropdown: false,
}

export default Navbar
