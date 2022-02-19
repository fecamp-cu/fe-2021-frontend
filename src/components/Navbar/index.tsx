import { Link } from "react-router-dom"
import { navPath } from "../../utils/constants/common.constant"
import { Path } from "../../utils/enums/common.enum"
import { User } from "../../utils/types/common"
import { HiMenu, HiMenuAlt3 } from "react-icons/hi"
import React from "react"
import { MenuLink, Nav } from "./style"

export type NavbarProps = {
  user: User
  path: string
  isClicked: boolean
  setIsClicked: (isClicked: boolean) => void
}

const Navbar = (props: NavbarProps) => {
  const paths = navPath.map((path) => {
    return (
      <MenuLink to={path.link} path={props.path}>
        {path.name}
      </MenuLink>
    )
  })

  return (
    <Nav className="rounded-lg py-1 px-5 sm:rounded-xl sm:px-5 lg:py-2 lg:px-10">
      <Link
        to={Path.LANDING}
        className="flex w-1/2 flex-col justify-center text-center font-MuseoModerno text-lg font-bold sm:w-1/5 sm:text-xl lg:w-1/6 lg:text-xl xl:text-3xl"
      >
        FE CAMP
      </Link>

      <div className="invisible flex h-0 w-0 flex-row gap-x-5 sm:visible sm:h-full sm:w-2/5 lg:w-1/2">{paths}</div>
      <div className="invisible flex h-0 w-0 flex-row items-center justify-end gap-x-5 sm:visible sm:h-full sm:w-2/5 lg:w-1/3">
        <Link to={Path.REGISTER} className="">
          สมัครค่าย
        </Link>
        {!props.user ? (
          <Link to={Path.LOGIN} className="">
            เข้าสู่ระบบ
          </Link>
        ) : (
          <Link to={Path.PROFILE} className="flex flex-row items-center gap-x-2 text-lg">
            <img src={(props.user as User).profile?.imageUrl} alt="Profile Pic" className="h-[3.125rem] w-[3.125rem] rounded-full" />
            {(props.user as User).username}
          </Link>
        )}
      </div>
      <div className="visible flex h-full w-1/2 flex-col items-end sm:invisible sm:w-0">
        {!props.isClicked ? (
          <HiMenu className="h-1/3 w-1/5 sm:w-[12%]" onClick={() => props.setIsClicked(!props.isClicked)} />
        ) : (
          <HiMenuAlt3 className="h-1/3 w-1/5 sm:w-[12%]" onClick={() => props.setIsClicked(!props.isClicked)} />
        )}
      </div>
    </Nav>
  )
}

export default Navbar
