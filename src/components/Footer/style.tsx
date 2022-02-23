import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa"
import styled from "styled-components"
import { device } from "../../utils/constants/common.constant"
import { Root } from "../../utils/style/common"

export const FooterRoot = styled(Root)`
  row-gap: 1rem;
  flex-direction: column;
  background-color: #fff;
`

export const FooterContentRoot = styled.div`
  display: flex;
`

export const FooterContent = styled(FooterContentRoot)`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;

  @media ${device.laptopL} {
    padding-right: 2.5rem;
    padding-left: 2.5rem;
    flex-direction: row;
  }
`
export type FooterContentItemProps = {
  direction: string
}

export const FooterContentItem = styled(FooterContent)`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;

  @media ${device.laptopL} {
    font-size: 4rem;
    width: 60%;
  }
`

export const FooterContentSocial = styled(FooterContent)`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  column-gap: 1.75rem;

  @media ${device.laptopL} {
    justify-content: end;
    font-size: 4rem;
    width: 40%;
  }
`

export const FooterLabel = styled.div`
  font-family: "MuseoModerno", sans-serif;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media ${device.mobileOverall} {
    font-size: 3rem;
    width: 60%;
  }

  @media ${device.laptop} {
    font-size: 4rem;
    width: 100%;
  }

  @media ${device.desktop} {
    font-size: 4rem;
    width: 100%;
  }
`

export const FooterLabelContent = styled(FooterContentRoot)`
  color: #bbbbbb;
  column-gap: 0.5rem;
  font-size: 0.65rem;
  width: 95%;

  @media ${device.mobileOverall} {
    font-size: 1rem;
    width: 70%;
    column-gap: 1rem;
  }

  @media ${device.laptopL} {
    width: 50%;
    column-gap: 1rem;
  }

  @media ${device.desktop} {
    font-size: 1.25rem;
    width: 40%;
    column-gap: 1rem;
  }
`

export const Line = styled.hr`
  border-radius: 2.5rem;
  border-color: #bbbbbb;
  color: #bbbbbb;
  background-color: #bbbbbb;
  border-width: 1px;
  width: 100%;
`

export const FacultyName = styled.h1`
  font-family: "NotoSansThai", sans-serif;
  font-size: 0.65rem;
  line-height: 0.8rem;
  font-weight: bold;
  color: #b32f4e;
  text-align: center;
  width: 100%;

  @media ${device.mobileM} {
    font-size: 0.85rem;
    line-height: 1rem;
  }

  @media ${device.mobileL} {
    font-size: 1.125rem;
    line-height: 1.678rem;
  }

  @media ${device.mobileOverall} {
    font-size: 2rem;
    line-height: 2rem;
  }

  @media ${device.laptopL} {
    text-align: left;
    font-size: 1.75rem;
    line-height: 2rem;
  }
`

export const FacultyAddress = styled.h2`
  text-align: center;
  font-family: "NotoSansThai", sans-serif;
  font-size: 0.5rem;
  line-height: 1rem;
  font-weight: bold;
  color: #b32f4e;
  width: 100%;

  @media ${device.mobileM} {
    font-size: 0.6rem;
    line-height: 1rem;
  }

  @media ${device.mobileL} {
    font-size: 0.75rem;
    line-height: 1.1rem;
  }

  @media ${device.mobileOverall} {
    font-size: 1.1rem;
    line-height: 1.8rem;
  }

  @media ${device.laptopL} {
    text-align: left;
    font-size: 1.1rem;
    line-height: 1.8rem;
  }
`

export const FacebookIcon = styled(FaFacebookSquare)`
  color: #b32f4e;
  height: 2.5rem;
  width: 2.5rem;

  @media ${device.mobileOverall} {
    height: 5rem;
    width: 5rem;
  }
`

export const YoutubeIcon = styled(FaYoutubeSquare)`
  color: #b32f4e;
  height: 2.5rem;
  width: 2.5rem;

  @media ${device.mobileOverall} {
    height: 5rem;
    width: 5rem;
  }
`

export const InstagramIcon = styled(FaInstagramSquare)`
  color: #b32f4e;
  height: 2.5rem;
  width: 2.5rem;

  @media ${device.mobileOverall} {
    height: 5rem;
    width: 5rem;
  }
`
