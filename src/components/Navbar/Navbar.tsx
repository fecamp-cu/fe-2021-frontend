import PropTypes, { string } from "prop-types"
import { useState } from "react"
import "./Navbar.css"

function Navbar(props: any) {
  const { isLogin, atPage } = props
  const [hasDropdown, setHasDropDown] = useState(false)

  function clickPage(event: any) {
    console.log("click")
    if (hasDropdown == true) {
      return setHasDropDown(false)
    }
    return setHasDropDown(true)
    //   window.location.reload();
  }

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
