import styled from "styled-components"
import { device } from "../../utils/constants/common.constant"
import { Root } from "../../utils/style/common"

export const ProfileRoot = styled(Root)`
  row-gap: 1.5rem;

  @media ${device.laptop} {
    row-gap: 2.58rem;
  }
`

export const ProfileAvatar = styled.img`
  height: 5rem;
  width: 5rem;
  object-fit: cover;
  text-align: center;
  border-radius: 9999px;

  @media ${device.laptop} {
    height: 7.5rem;
    width: 7.5rem;
  }
`

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  column-gap: 1rem;

  @media ${device.laptop} {
    column-gap: 2.5rem;
  }
`

export const ProfileInfoContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 65%;
  height: 6rem;
  border-radius: 0.75rem;
  border-width: 2px;
  border-color: white;
  background-color: rgba(255, 255, 255, 0.4);
  padding-left: 1rem;
  padding-right: 1rem;

  @media ${device.mobileOverall} {
    height: 7rem;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    width: 50%;
  }

  @media ${device.laptop} {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    width: 40%;
  }

  @media ${device.laptopL} {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    width: 30%;
  }
`

export const ProfileInfoContentLabelRoot = styled.div`
  display: flex;
  flex-direction: column;
`

export const ProfileInfoContentLabel = styled.p`
  font-size: 0.8rem;
  line-height: 1.2rem;
  color: #fff;

  @media ${device.mobileM} {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  @media ${device.laptop} {
    font-size: 1.25rem;
    line-height: 1.875rem;
  }
`

export const ProfileExternalRoot = styled.div`
  text-align: center;
  width: 85%;

  @media ${device.mobileOverall} {
    width: 65%;
  }

  @media ${device.laptop} {
    width: 55%;
  }

  @media ${device.laptopL} {
    width: 45%;
  }
`
