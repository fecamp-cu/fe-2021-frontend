import React, { useState } from "react"
import styled from "styled-components"
interface ExpandableProps {
  collapsedHeight: number
  expandedHeight: number
  atWidth: number
  expandIcon: any
  className?: string
  collapseIcon: any
}
const ExpandableBlock = styled.div<{ collapsedHeight: number; expandedHeight: number; atWidth: number; show: boolean }>`
  @media (max-width: ${(props) => props.atWidth}px) {
    display: flex;
    flex-wrap: wrap;
    transition: 0.5s max-height ${(props) => (props.show ? "ease-in" : "ease-out")};
    height: auto;
    max-height: ${(props) => (props.show ? `${props.expandedHeight}px` : `${props.collapsedHeight}px`)};
    overflow-y: hidden;
  }
`
const ExpandButton = styled.button<{ atWidth: number }>`
  display: none;
  @media (max-width: ${(props) => props.atWidth}px) {
    display: block;
  }
`
export const Expandable: React.FC<ExpandableProps> = ({
  children,
  collapsedHeight,
  expandedHeight,
  atWidth,
  expandIcon,
  className,
  collapseIcon,
}) => {
  const [show, setShow] = useState(false)
  return (
    <div>
      <ExpandableBlock collapsedHeight={collapsedHeight} expandedHeight={expandedHeight} atWidth={atWidth} show={show} className={className ?? ""}>
        {children}
      </ExpandableBlock>
      <div className="flex justify-center">
        <ExpandButton onClick={() => setShow((prev) => !prev)} atWidth={atWidth}>
          {show ? collapseIcon : expandIcon}
        </ExpandButton>
      </div>
    </div>
  )
}
