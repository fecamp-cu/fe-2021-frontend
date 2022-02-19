import { Link } from "react-router-dom"
import { menuItems, subMenuItems } from "../../utils/constants/common.constant"
import { MenuBG, MenuList, MenuRoot } from "./style"

export type MenubarProps = {
  width: number
}

export const Menubar = (props: MenubarProps) => {
  const menu = props.width > 640 ? subMenuItems : menuItems
  const items = menu.map((item, pos) => {
    return (
      <Link to={item.link} className="flex w-full flex-col justify-center py-3" key={`item-${pos}`}>
        {item.name}
      </Link>
    )
  })

  return (
    <MenuRoot className="mt-[2.7rem] justify-center sm:mt-[3.7rem] sm:justify-end lg:mt-[4.2rem] xl:mt-[4.5rem]">
      <MenuBG className="w-11/12 blur-sm sm:w-[37%] lg:w-[30%] xl:w-1/5 2xl:w-72" />
      <MenuList className="w-11/12 divide-y-2 divide-white font-NotoSansThai font-medium sm:w-[37%] sm:text-xs lg:w-[30%] xl:w-1/5 2xl:w-72">
        {items}
      </MenuList>
    </MenuRoot>
  )
}
