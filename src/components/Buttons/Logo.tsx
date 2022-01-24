import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types'

export interface LogoProps {
    marginright? : string
    marginleft?: string
    marginbottom?: string
}

export const Logo = styled.span<LogoProps>`
  margin-right: ${(props) => props.marginright || "10px"};
  margin-left: ${(props) => props.marginleft || "0px"};
  margin-bottom: ${(props) => props.marginbottom || "10px"};
  color: #fff;
`
