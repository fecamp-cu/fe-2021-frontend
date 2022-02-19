import { Link } from "react-router-dom"
import { menuItems } from "../../utils/constants/common.constant"

export type MenubarProps = {
  menu?: string
}

export const Menubar = (props: MenubarProps) => {
  const items = menuItems.map((item) => {
    return (
      <Link to={item.link} className="flex flex-col justify-center py-4">
        {item.name}
      </Link>
    )
  })

  return (
    <aside className="absolute z-30 mt-10 flex w-full animate-fade-in-fast flex-row justify-center transition">
      <div className="absolute z-30 h-full w-11/12 bg-white/50 blur-sm"></div>
      <div className="z-40 flex w-11/12  flex-col justify-center divide-y-2 divide-white rounded-xl border-2 border-white px-6 text-center font-NotoSansThai font-medium text-white">
        {items}
      </div>
    </aside>
  )
}
