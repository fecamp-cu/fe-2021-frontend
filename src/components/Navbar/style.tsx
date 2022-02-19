import { Link } from "react-router-dom"
import styled from "styled-components"

export const Nav = styled.nav`
  color: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: center;
  user-select: none;
  column-gap: 1.25rem;
  font-size: 1.25rem;
  line-height: 1.875rem;
  font-weight: 500;
  background-color: rgba(255, 255, 255, 0.5);
  position: absolute;
  width: 100%;
`

export type MenuLinkProps = {
  path: string
}

export const MenuLink = styled(Link).attrs((props: MenuLinkProps) => ({
  path: props.path,
}))`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-decoration: ${(props) => (props.to === props.path ? "underline" : "none")};
`
