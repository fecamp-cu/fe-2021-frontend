import React from "react"
import { IconType } from "react-icons"
import styled from "styled-components"
import { BaseButton } from "./BaseButton"
import { BaseButtonProps } from "./BaseButton"
import { LogoProps } from "./Logo"

interface ButtonProps extends BaseButtonProps, LogoProps {
  className?: string
  onClick?: () => void
  Icon?: IconType
  form?: string
}
const Logo = styled.span`
  margin-right: 10px;
  margin-bottom: 10px;
  color: #fff;
`

export const Button: React.FC<ButtonProps> = ({ onClick, Icon, children, textColor, ...rest }) => {
  return (
    <BaseButton onClick={onClick} {...rest} textColor={textColor}>
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
