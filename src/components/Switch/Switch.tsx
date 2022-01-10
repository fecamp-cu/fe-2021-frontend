import * as React from "react"
import "./switch.style.css"
// interface TabItem {
//   title: string
//   onClick?: (title: string) => void
// }
interface SwitchProps {
  items: string[]
  selectedItem?: string
}
const Switch = ({ items, selectedItem }: SwitchProps) => {
  return (
    <div className="flex justify-center">
      <div className="flex switch">
        {items.map((item) => (
          <div className={`flex justify-center items-center px-5 py-2`} id={selectedItem === item ? "selected-tab" : ""}>
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Switch
