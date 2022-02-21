import { Link } from "react-router-dom"
import { navPath } from "../../utils/constants/common.constant"
import { Path, Size } from "../../utils/enums/common.enum"
import { User } from "../../utils/types/common"
import { HiMenu, HiMenuAlt3 } from "react-icons/hi"
import React from "react"
import { MenuLink, Nav, NavContent, NavContentItem, NavMenu, NavTitle } from "./style"

export type NavbarProps = {
  user: User
  width: number
  path: string
  isClicked: boolean
  setIsClicked: (isClicked: boolean) => void
}

const Navbar = (props: NavbarProps) => {
  const paths = navPath.map((path) => {
    return props.width > Size.MOBILE_OVERALL ? (
      <MenuLink to={path.link} path={props.path} key={`path-${path.name}`}>
        {path.name}
      </MenuLink>
    ) : null
  })

  return (
    <Nav>
      <NavTitle to={Path.LANDING}>FE CAMP</NavTitle>
      <NavMenu>{paths}</NavMenu>

      {props.width > Size.MOBILE_OVERALL && (
        <NavContent>
          <Link to={Path.REGISTER} className="flex flex-col justify-center">
            สมัครค่าย
          </Link>
          {!props.user ? (
            <Link to={Path.LOGIN}>เข้าสู่ระบบ</Link>
          ) : (
            <NavContentItem onClick={() => props.setIsClicked(!props.isClicked)}>
              <img
                src={(props.user as User).profile?.imageUrl}
                alt="Profile Pic"
                className="h-[2.5rem] w-[2.5rem] rounded-full lg:h-[3.125rem] lg:w-[3.125rem]"
              />
              <div>{(props.user as User).username}</div>
            </NavContentItem>
          )}
        </NavContent>
      )}
      <div className="visible z-40 flex h-full w-1/2 flex-col items-end sm:invisible sm:w-0">
        {!props.isClicked ? (
          <HiMenu className="z-40 h-1/3 w-1/5 sm:w-[12%]" onClick={() => props.setIsClicked(!props.isClicked)} />
        ) : (
          <HiMenuAlt3 className="z-40 h-1/3 w-1/5 sm:w-[12%]" onClick={() => props.setIsClicked(!props.isClicked)} />
        )}
      </div>
    </Nav>
  )
}

export default Navbar
