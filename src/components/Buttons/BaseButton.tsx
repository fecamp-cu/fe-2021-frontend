import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

export interface BaseButtonProps {
  width?: string
  height?: string
  bg?: string
  outline?: boolean
  textColor?: string
  fontSize?: string
  fontWeight?: string
  lineHeight?: string
  shadow?: boolean
}

export const BaseButton = styled.button<BaseButtonProps>`
  width: ${(props) => (props.width ? `${props.width}px` : "100%")};
  height: ${(props) => (props.height ? `${props.height}px` : "40px")};
  background: ${(props) => props.bg || "transparent"};
  border-radius: 5px;
  border: ${(props) => props.outline && "1px solid white"};
  box-shadow: ${(props) => props.shadow && "0px 0px 10px rgba(0, 0, 0, 0.25)"};

  font-family: CHULALONGKORN;
  font-style: normal;

  font-size: ${(props) => props.fontSize || "20px"};
  line-height: ${(props) => props.lineHeight || "30px"};
  font-weight: ${(props) => props.fontWeight || "bold"};
  
  padding-top: 7px;

  & > p {
    display: flex;
    justify-content: center;
    background: ${(props) => props.textColor || "white"};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
}
`
