import { Link } from "react-router-dom"
import { navPath } from "../../utils/constants/common.constant"
import { Path, Size } from "../../utils/enums/common.enum"
import { PagePath, User } from "../../utils/types/common"
import { HiMenu, HiMenuAlt3 } from "react-icons/hi"
import React, { useState, useRef } from "react"
import { MenuLink, Nav, NavContent, NavContentItem, NavMenu, NavTitle } from "./style"
import { Menubar } from "./Menubar"
import { useOutsideAlerter } from "../../hooks/useOutsideAlerter"
import { useUserContext } from "../../utils/contexts/userContext"
import { Avatar } from "../Profile/Avatar"

export type NavbarProps = {
  user: User
  width: number
  path: string
  isClicked: boolean
  setIsClicked: (isClicked: boolean) => void
}

const Navbar = (props: NavbarProps) => {
  const { logout } = useUserContext()
  const [showMenu, setShowMenu] = useState(false)
  const navbarRef = useRef(null)
  const onClickedOutside = () => setShowMenu(false)
  useOutsideAlerter(navbarRef, onClickedOutside)

  const onClickMenu = (link: PagePath) => {
    if (link.name === "ออกจากระบบ") logout()
    setShowMenu(false)
  }

  const paths = navPath.map((path) => {
    return props.width > Size.MOBILE_OVERALL ? (
      <MenuLink to={path.link} path={props.path} key={`path-${path.name}`}>
        {path.name}
      </MenuLink>
    ) : null
  })

  return (
    <div ref={navbarRef}>
      <Nav>
        <NavTitle to={Path.LANDING}>FE CAMP</NavTitle>
        <NavMenu>{paths}</NavMenu>

        {/* {props.width > Size.MOBILE_OVERALL && (
          <NavContent>
            {!props.user.id && (
              <Link to={Path.REGISTER} className="flex flex-col justify-center">
                สมัครสมาชิก
              </Link>
            )}
            {!props.user.id ? (
              <Link to={Path.LOGIN}>เข้าสู่ระบบ</Link>
            ) : (
              <NavContentItem onClick={() => setShowMenu(!showMenu)}>
                {props.user.profile.imageUrl ? (
                  <img
                    src={(props.user as User).profile?.imageUrl}
                    alt="Profile Pic"
                    className="object-cover h-[2.5rem] w-[2.5rem] rounded-full lg:h-[3.125rem] lg:w-[3.125rem]"
                  />
                ) : (
                  <Avatar user={props.user} className="h-[2.5rem] w-[2.5rem] text-2xl lg:h-[3.125rem] lg:w-[3.125rem]" />
                )}
                <div>{(props.user as User).username}</div>
              </NavContentItem>
            )}
          </NavContent>
        )} */}
        <div className="visible z-40 flex h-full w-1/2 flex-col items-end sm:invisible sm:w-0">
          {!showMenu ? (
            <HiMenu className="z-40 h-1/3 w-1/5 sm:w-[12%]" onClick={() => setShowMenu(!showMenu)} />
          ) : (
            <HiMenuAlt3 className="z-40 h-1/3 w-1/5 sm:w-[12%]" onClick={() => setShowMenu(!showMenu)} />
          )}
        </div>
      </Nav>
      {showMenu && <Menubar width={props.width} onClickMenu={onClickMenu} user={props.user} />}
    </div>
  )
}

export default Navbar
