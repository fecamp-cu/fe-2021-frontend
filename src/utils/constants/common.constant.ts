import { Path } from "../enums/common.enum"
import { PagePath } from "../types/common"

export const navPath: PagePath[] = [
  {
    name: "หน้าแรก",
    link: Path.LANDING,
  },
  {
    name: "ร้านค้า",
    link: Path.SHOP,
  },
  {
    name: "เข้าสู่บทเรียน",
    link: Path.NONE,
  },
]

export const menuItems: PagePath[] = [
  {
    name: "หน้าแรก",
    link: Path.LANDING,
  },
  {
    name: "ร้านค้า",
    link: Path.SHOP,
  },
  {
    name: "สมัครสมาชิก",
    link: Path.REGISTER,
  },
  {
    name: "เข้าสู่ระบบ",
    link: Path.LOGIN,
  },
  {
    name: "ข้อมูลส่วนตัว",
    link: Path.PROFILE,
  },
]

export const subMenuItems = [
  {
    name: "ข้อมูลส่วนตัว",
    link: Path.PROFILE,
  },
  {
    name: "ออกจากระบบ",
    link: Path.LOGOUT,
  },
]

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  mobileOverall: "640px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  mobileOverall: `(min-width: ${size.mobileOverall})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
}
