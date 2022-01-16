import React from "react";
import styled from "styled-components";
import { BaseButton } from "./BaseButton";
import { BaseButtonProps } from "./BaseButton";

interface ButtonProps extends BaseButtonProps {
    onClick?: () => void
    icon?: any
}
const Logo = styled.p`
  
  margin-right: 10px;
  margin-bottom: 10px;
  color: #fff;
  
`;

export const Button: React.FC<ButtonProps> = ({ onClick, icon, children, ...rest }) => {
    return (
        <BaseButton onClick={onClick} {...rest}>
            {/* <p>{icon && <Logo>{icon}</Logo>}</p> */}
            <p>
                {icon && <Logo>{icon}</Logo>}
                {children}
            </p>
        </BaseButton>
    )
}

