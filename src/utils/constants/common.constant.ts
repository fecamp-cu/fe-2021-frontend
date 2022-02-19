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
