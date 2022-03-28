import { Link } from "react-router-dom"
import styled from "styled-components"
import { device } from "../../utils/constants/common.constant"

export const Nav = styled.nav`
  font-family: "NotoSansThaiUI", sans-serif;
  display: flex;
  flex-direction: row;
  align-items: center;
  user-select: none;
  column-gap: 1.25rem;
  font-size: 1.25rem;
  line-height: 1.875rem;
  font-weight: 500;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  z-index: 40;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  color: #fff;

  @media ${device.laptop} {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    padding-bottom: 0.75rem;
    padding-top: 0.75rem;
  }
`

export const NavBG = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 30;
`

export const NavTitle = styled(Link)`
  font-family: "MuseoModerno", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 40;
  width: 50%;

  @media ${device.mobileOverall} {
    width: 20%;
    font-size: 1.5rem;
  }

  @media ${device.laptop} {
    width: 16.67%;
    font-size: 1.5rem;
  }

  @media ${device.laptopL} {
    width: 16.67%;
    font-size: 2.25rem;
  }
`

export const NavMenu = styled.div`
  display: flex;
  flex-direction: row;
  height: 0%;
  width: 0%;
  /* visibility: hidden; */
  column-gap: 1.25rem;
  z-index: 40;

  @media ${device.mobileOverall} {
    visibility: visible;
    height: 100%;
    width: 40%;
  }

  @media ${device.laptop} {
    visibility: visible;
    height: 100%;
    width: 50%;
  }
`

export const NavContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  height: 0%;
  width: 0%;
  visibility: hidden;
  column-gap: 1.25rem;
  z-index: 40;

  @media ${device.mobileOverall} {
    visibility: visible;
    height: 100%;
    width: 40%;
  }

  @media ${device.laptop} {
    visibility: visible;
    height: 100%;
    width: 33.33%;
  }
`

export const NavContentItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 0.5rem;
  z-index: 40;
  font-size: 1.25rem;
  line-height: 1.875rem;
  cursor: pointer;
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
  user-select: none;
  z-index: 30;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  animation: fadeIn 0.5s ease-in-out;
  margin-top: 3rem;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  transition: all 0.5s ease-in-out;

  @media ${device.mobileM} {
    margin-top: 3.2rem;
  }

  @media ${device.mobileL} {
    margin-top: 3.5rem;
  }

  @media ${device.mobileOverall} {
    margin-top: 3.6rem;
    justify-content: end;
  }

  @media ${device.laptop} {
    margin-top: 4.8rem;
    justify-content: end;
  }
`

export const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  z-index: 40;
  border-radius: 0.75rem;
  /* border: 2px solid #ffffff; */
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  color: #ffffff;
`

export const MenuBG = styled.div`
  position: absolute;
  z-index: 30;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  /* background-color: rgba(255, 255, 255, 0.5); */
`
