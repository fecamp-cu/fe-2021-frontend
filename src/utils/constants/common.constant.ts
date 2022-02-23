import { Path, Size } from "../enums/common.enum"
import { PagePath } from "../types/common"

export const navPath: PagePath[] = [
  {
    name: "หน้าแรก",
    link: Path.LANDING,
  },
  // TODO: remove this nin sprint 2
  // {
  //   name: "ร้านค้า",
  //   link: Path.SHOP,
  // },
  {
    name: "ตัวอย่างข้อสอบ",
    link: Path.PREVIEW,
  },
  // {
  //   name: "เข้าสู่บทเรียน",
  //   link: Path.NONE,
  // },
]

export const menuItems: PagePath[] = [
  {
    name: "หน้าแรก",
    link: Path.LANDING,
  },
  // TODO: remove this nin sprint 2
  // {
  //   name: "ร้านค้า",
  //   link: Path.SHOP,
  // },
  {
    name: "ตัวอย่างข้อสอบ",
    link: Path.PREVIEW,
  },
  // {
  //   name: "สมัครสมาชิก",
  //   link: Path.REGISTER,
  // },
  // {
  //   name: "เข้าสู่ระบบ",
  //   link: Path.LOGIN,
  // },
]

export const menuItemsLoggedin: PagePath[] = [
  {
    name: "หน้าแรก",
    link: Path.LANDING,
  },
  // TODO: remove this nin sprint 2
  // {
  //   name: "ร้านค้า",
  //   link: Path.SHOP,
  // },
  {
    name: "ตัวอย่างข้อสอบ",
    link: Path.PREVIEW,
  },
  // {
  //   name: "ข้อมูลส่วนตัว",
  //   link: Path.PROFILE,
  // },
]

export const subMenuItems = [
  {
    name: "ข้อมูลส่วนตัว",
    link: Path.PROFILE,
  },
  // {
  //   name: "ออกจากระบบ",
  //   link: Path.LANDING,
  // },
]

export const device = {
  mobileS: `(min-width: ${Size.MOBILE_S}px)`,
  mobileM: `(min-width: ${Size.MOBILE_M}px)`,
  mobileL: `(min-width: ${Size.MOBILE_L}px)`,
  mobileOverall: `(min-width: ${Size.MOBILE_OVERALL}px)`,
  tablet: `(min-width: ${Size.TABLET}px)`,
  laptop: `(min-width: ${Size.LAPTOP}px)`,
  laptopL: `(min-width: ${Size.LAPTOP_L}px)`,
  desktop: `(min-width: ${Size.DESKTOP}px)`,
  desktopL: `(min-width: ${Size.DESKTOP}px)`,
}
