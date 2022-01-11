import * as React from "react"
import { useState, useCallback } from "react"
import "./switch.style.css"
interface SwitchItem {
  title: string
  value: string
}
interface SwitchProps {
  items: SwitchItem[]
  onSelectCallback: (value: string) => void
}
const Switch = ({ items, onSelectCallback }: SwitchProps) => {
  const [selectedItem, setSelectedItem] = useState(items[0])
  const onSelect = useCallback(
    (item: SwitchItem) => {
      setSelectedItem(item)
      onSelectCallback(item.value)
    },
    [onSelectCallback]
  )
  return (
    <div className="flex justify-center text-xs sm:text-lg mb-6">
      <div className="flex switch w-full justify-center">
        {items.map((item) => (
          <button
            className={`flex justify-center items-center px-5`}
            onClick={() => onSelect(item)}
            key={item.title}
            id={selectedItem.title === item.title ? "selected-tab" : ""}
          >
            {item.title}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Switch