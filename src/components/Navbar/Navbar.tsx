import { useState } from "react"
import "./Navbar.css"
import "../../index.css"
import { useLocation, Link } from "react-router-dom"
import { MdLaunch } from "react-icons/md"
import { HiMenuAlt3 } from "react-icons/hi"

interface NavbarProps {
  userName: string
  isLogin: boolean
}

function Navbar(props: NavbarProps) {
  const { userName, isLogin } = props
  const location = useLocation()
  const atPage = location.pathname

  /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
  function dropMenu() {
    document.getElementById("Menu-list")!.classList.toggle("show")
  }

  function dropProfile() {
    document.getElementById("profile-list")!.classList.toggle("show")
  }

  // Close the dropdown if the user clicks outside of it
  window.onclick = function (event: any) {
    if (!event.target.matches(".dropbtn")) {
      const dropdowns = document.getElementsByClassName("dropdown-content")
      let i
      for (i = 0; i < dropdowns.length; i++) {
        const openDropdown = dropdowns[i]
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show")
        }
      }
    }
  }


  return (
    <nav
      className="navbar navbar-expand-lg"
    >
      {/* -----------------------nav logo, will be change to FE logo later------------------- */}
      <div className="container-fluid">
      <Link className={""} to={"/"} id="element" style={{paddingLeft:"3%", marginRight:"150px"}}>
          FECAMP
      </Link>

        {/* --------------toggle button, it will appear when open in mobile------------------ */}
        <button className="navbar-toggler" type="button" onClick={dropMenu}>
          <HiMenuAlt3 color="white" size="2.5rem" className="dropbtn" />
        </button>

        {/* -------------------the menu dropdown when you open in mobile--------------------- */}
        <div
          className="dropdown-menu dropdown-alignment dropdown-content"
          id="Menu-list"
        >
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
                  เข้าสู่บทเรียน
                  <MdLaunch />
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

        {/* -------------------------the normal menu, when you open in desktop---------------------- */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav list-inline me-auto">
            <li className="nav-item">
              <Link className={"pt-1 me-4" + (atPage === "/" ? " border-bottom" : "")} to={"/"} id="element">
                หน้าแรก
              </Link>
            </li>
            <li className="nav-item">
              <Link className={"pt-1 me-4" + (atPage === "/shop" ? " border-bottom" : "")} to={"/shop"} id="element">
                ร้านหนังสือ
              </Link>
            </li>
            {isLogin ? (
              <li className="nav-item">
                <Link className={"pt-1 me-4" + (atPage === "/lesson" ? " border-bottom" : "")} to={"/lesson"} id="element">
                  เข้าสู่บทเรียน <MdLaunch />
                </Link>
              </li>
            ) : (
              <></>
            )}
          </ul>
          <ul className="navbar-nav list-inline justify-content-end">
            <li className="nav-item">
              <Link className={"pt-2 me-4" + (atPage === "/register" ? " border-bottom" : "")} to={"/register"} id="element">
                สมัครค่าย
              </Link>
            </li>
            {isLogin ? (
              <>
                <img className="rounded-circle d-inline-flex me-2" src="" width={50} height={50} alt="" id="picture"></img>
                <li className="nav-item dropdown show">
                  <button className={"pt-2 me-4 d-inline-flex dropbtn"} data-bs-toggle="dropdown" id="element" onClick={dropProfile}>
                    {userName}
                  </button>
                  <ul
                    className="dropdown-menu dropdown-content border-drop"
                    style={{margin: "30px 0% 0% -60px", width: "176px", height: "86px" }}
                    id="profile-list"
                  >
                    <li>
                      <Link className="dropdown-item center" to={"/profile"} id="element">
                        ข้อมูลส่วนตัว
                      </Link>
                      <hr></hr>
                      <Link className="dropdown-item center" to={"/logout"} id="element">
                        ออกจากระบบ
                      </Link>
                    </li>
                  </ul>
                </li>
              </>
            ) : (
              <Link className={"pt-2 me-4" + (atPage === "/login" ? " border-bottom" : "")} to={"/login"} id="element">
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
