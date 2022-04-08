import { useEffect, useState } from "react"
import styled from "styled-components"
import useWindowDimensions from "../hooks/useWindowDimension"

export const PageContainer = styled.div`
  padding-top: 70px;
`

export const Circle = styled.span.attrs({
  className: "flex justify-center items-center",
})<{ color: string }>`
  background-color: ${(props) => props.color || "white"};
  align-self: end;
  border-radius: 50%;
  height: 60px;
  width: 60px;
`

export const RoundBox = styled.div.attrs({
  className: "px-3 py-3",
})<{ bg?: string; borderThickness?: string; textColor: string }>`
  border-radius: 10px;
  max-width: 200px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  background: ${(props) => props.bg || "white"};
  color: ${(props) => props.textColor};
  border: ${(props) => props.borderThickness || "0.5"}px solid white;
`

export const FloatingGlassBox = styled.div`
  box-sizing: border-box;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  background: var(--gm-color);
  border-radius: 17px;
  max-width: 500px;
  margin: 20% auto 30% auto;
`
