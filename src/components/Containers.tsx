import { useEffect, useState } from "react"
import styled from "styled-components"
import useWindowDimensions from "../hooks/useWindowDimension"

export const PageContainer = styled.div`
  margin-bottom: 30px;
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
  background-color: ${(props) => props.bg || "white"};
  color: ${(props) => props.textColor};
  border: ${(props) => props.borderThickness || "0.5"}px solid white;
`
interface ResizableContainerProps {
  width: number
  height: number
  className?: string
}
const ResizableDiv = styled.div<{ scale: number; width: number; height: number }>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  transform: translate(-10%) scale(${(props) => props.scale * 0.75});
  resize: both;
  transform-origin: center center;
`
export const ResizableContainer: React.FC<ResizableContainerProps> = ({ className, width, height, children }) => {
  const windowDimension = useWindowDimensions()
  const [scale, setScale] = useState<number>(Math.min(width / windowDimension.width, height / windowDimension.height))
  useEffect(() => {
    setScale(Math.min(width / windowDimension.width, height / windowDimension.height))
  }, [windowDimension.width, windowDimension.height, width, height])
  return (
    <ResizableDiv scale={scale} width={width} height={height}>
      {children}
    </ResizableDiv>
  )
}
