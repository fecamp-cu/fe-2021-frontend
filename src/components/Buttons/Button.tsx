import React, { ButtonHTMLAttributes } from "react"
import { IconType } from "react-icons"
import styled from "styled-components"
import { BaseButton, BaseButtonProps } from "./BaseButton"

import { LogoProps, Logo } from "./Logo"

interface ButtonProps extends BaseButtonProps, LogoProps {
  className?: string
  onClick?: () => void
  Icon?: IconType
  type?: "button" | "submit"
  form?: string
}

export const Button: React.FC<ButtonProps> = ({ children, textColor, Icon, marginbottom, marginleft, marginright, margintop, ...rest }) => {
  return (
    <BaseButton {...rest} textColor={textColor}>
      {/* <p>{icon && <Logo>{icon}</Logo>}</p> */}
      <p>
        {Icon && (
          <Logo {...{ marginbottom, marginleft, marginright, margintop }}>
            <Icon color={textColor} size={27}></Icon>
          </Logo>
        )}
        {children}
      </p>
    </BaseButton>
  )
}
