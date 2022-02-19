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

export const MenuRoot = styled.aside`
  position: absolute;
  z-index: 30;
  width: 100%;
  display: flex;
  flex-direction: row;
  animation: fadeIn 0.5s ease-in-out;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  transition: all 0.5s ease-in-out;
`

export const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  z-index: 40;
  border-radius: 0.75rem;
  border: 2px solid #ffffff;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  color: #ffffff;
`

export const MenuBG = styled.div`
  position: absolute;
  z-index: 30;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
`
