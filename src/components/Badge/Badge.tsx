import React, { useState } from "react"
import { RoundBox } from "../Containers"

interface BadgeProps {
  icon: any
  title: string
  value?: string
  checked: boolean
  onChangeCallback: (value: string) => void
}
export const Badge: React.FC<BadgeProps> = ({ icon, title, checked, onChangeCallback, value }) => {
  return (
    <RoundBox
      textColor={checked ? "white" : "var(--crimson)"}
      bg={checked ? "var(--bg-color)" : "white"}
      onClick={() => onChangeCallback(value ?? title)}
    >
      <div className="flex justify-start">
        <img src={icon} className="mr-3"></img>
        <span className="flex items-center text-lg font-bold leading-none" style={{ marginBottom: "-5px" }}>
          {title}
        </span>
      </div>
    </RoundBox>
  )
}
