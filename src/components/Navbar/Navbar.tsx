import PropTypes, { string } from "prop-types"
import { useState } from "react"
import "./Navbar.css"
import "../../index.css"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import {MdLaunch} from "react-icons/md"
import {HiMenuAlt3} from "react-icons/hi"

interface NavbarProps {
  userName: string
  isLogin: boolean
}

function Navbar(props: NavbarProps) {
  const { userName, isLogin } = props
  const [hasDropdown, setHasDropDown] = useState(false)
  const location = useLocation()
  const atPage = location.pathname

  function clickPage(event: any) {
    console.log("click")
    if (hasDropdown == true) {
      return setHasDropDown(false)
    }
    return setHasDropDown(true)
    //   window.location.reload();
  }

  return (
    <nav
      className="navbar navbar-expand-lg sticky-top navbar-dark"
      style={{ background: "var(--gm-color)", top: "16px", margin: "15px" }}
      id="border-navbar"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{ height: "54px", width: "18%" }}>
          Navbar
        </a>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="dropdown"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={clickPage}
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="dropdown" onClick={clickPage}>
          <HiMenuAlt3 color="white" size="2.5rem"/>
        </button>

        <div className="dropdown-menu" style={{ background: "var(--gm-color)", width: "100%", margin: "10px 0px" }} id="border-drop">
          <li className="dropdown-item">
            <Link className={""} to={"/"} id="element">
              หน้าแรก
            </Link>
          </li>
          <hr></hr>
          <li className="dropdown-item">
            <Link className={""} to={"/shop"} id="element">
              ร้านหนังสือ
            </Link>
          </li>
          <hr></hr>
          {isLogin ? (
            <>
            <li className="dropdown-item">
              <Link className={""} to={"/lesson"} id="element">
                เข้าสู่บทเรียน <MdLaunch/>
              </Link>
            </li>
            <hr></hr>
            </>
          ) : (
            <></>
          )}
        
          {isLogin ? (
            <>
              <li className="dropdown-item">
                <Link className={""} id="element" to={"/profile"}>
                  ข้อมูลส่วนตัว
                </Link>
              </li>
              <hr></hr>
              <li className="dropdown-item">
                <Link className={""} id="element" to={"/logout"}>
                  ออกจากระบบ
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="dropdown-item">
                <Link className={""} id="element" to={"/login"}>
                  เข้าสู่ระบบ
                </Link>
              </li>
            </>
          )}
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav list-inline me-auto justify-content-star">
            <li className="nav-item">
              <Link className={"pt-1 me-4" + (atPage == "/" ? " border-bottom" : "")} to={"/"} id="element">
                หน้าแรก
              </Link>
            </li>
            <li className="nav-item">
              <Link className={"pt-1 me-4" + (atPage == "/shop" ? " border-bottom" : "")} to={"/shop"} id="element">
                ร้านหนังสือ
              </Link>
            </li>
            {isLogin ? (
              <li className="nav-item">
                <Link className={"pt-1 me-4" + (atPage == "/lesson" ? " border-bottom" : "")} to={"/lesson"} id="element">
                  เข้าสู่บทเรียน <MdLaunch/>
                </Link>
              </li>
            ) : (
              <></>
            )}
          </ul>
          <ul className="navbar-nav list-inline justify-content-end">
            <li className="nav-item">
              <Link className={"pt-2 me-4" + (atPage == "/register" ? " border-bottom" : "")} to={"/register"} id="element">
                สมัครค่าย
              </Link>
            </li>
            {isLogin ? (
              <>
                <img className="rounded-circle d-inline-flex me-2" src="" width={50} height={50} alt="" id="picture"></img>
                <li className="nav-item dropdown">
                  <a className={"pt-2 me-4" + (hasDropdown ? "" : " d-inline-flex")} data-bs-toggle="dropdown" id="profile">
                    {userName}
                  </a>
                  <ul className="dropdown-menu mt-3" style={{ background: "var(--gm-color)", margin: "0% 0% 0% -45%" }} id="border-drop">
                    <li>
                      <Link className="dropdown-item ms-2" to={"/profile"}>
                        ข้อมูลส่วนตัว
                      </Link>
                      <hr></hr>
                      <Link className="dropdown-item ms-2" to={"/logout"}>
                        ออกจากระบบ
                      </Link>
                    </li>
                  </ul>
                </li>
              </>
            ) : (
              <Link className={"pt-2 me-4" + (atPage == "/login" ? " border-bottom" : "")} to={"/login"} id="element">
                เข้าสู่ระบบ
              </Link>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  userName: "นายขยันอะ",
  isLogin: false,
}

export default Navbar
