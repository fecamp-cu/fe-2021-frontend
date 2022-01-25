import React from "react"
import { IconType } from "react-icons"
import styled from "styled-components"
import { BaseButton } from "./BaseButton"
import { BaseButtonProps } from "./BaseButton"
import { LogoProps } from "./Logo"
import { Logo } from "./Logo"

interface ButtonProps extends BaseButtonProps, LogoProps {
  className?: string
  onClick?: () => void
  Icon?: IconType
  form?: string


}

export const Button: React.FC<ButtonProps> = ({ onClick, Icon, children, textColor, className, ...rest }) => {
  return (
    <BaseButton onClick={onClick} className={className} textColor={textColor}>
      {/* <p>{icon && <Logo>{icon}</Logo>}</p> */}
      <p>
        {Icon && (
          <Logo {...rest}>
            <Icon color={textColor} size={20}></Icon>
          </Logo>
        )}
        {children}
      </p>
    </BaseButton>
  )
}
