import { Link } from "react-router-dom"
import { menuItems, menuItemsLoggedin, subMenuItems } from "../../utils/constants/common.constant"
import { Size } from "../../utils/enums/common.enum"
import { PagePath, User } from "../../utils/types/common"
import { MenuBG, MenuList, MenuRoot } from "./style"

export type MenubarProps = {
  user: User
  width: number
  onClickMenu: (link: PagePath) => void
}

export const Menubar = (props: MenubarProps) => {
  const menu = props.width > Size.MOBILE_OVERALL ? subMenuItems : props.user.id > 0 ? menuItemsLoggedin : menuItems
  const items = menu.map((item, pos) => {
    return (
      <Link to={item.link} className="flex w-full flex-col justify-center py-3" key={`item-${pos}`} onClick={() => props.onClickMenu(item)}>
        {item.name}
      </Link>
    )
  })

  return (
    <MenuRoot>
      <MenuBG className="w-11/12 sm:w-[37%] lg:w-[30%] xl:w-[22%] 2xl:w-80" />
      <MenuList className="w-11/12 divide-y-[1px] divide-white font-NotoSansThai font-medium sm:w-[37%] sm:text-xs lg:w-[30%] xl:w-[22%] 2xl:w-80 2xl:text-base">
        {items}
      </MenuList>
    </MenuRoot>
  )
}
