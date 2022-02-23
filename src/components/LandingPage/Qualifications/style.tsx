import styled from "styled-components"
import { device } from "../../../utils/constants/common.constant"
import { Root } from "../../../utils/style/common"

export const QualificationRoot = styled(Root)`
  row-gap: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const QualificationItemRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 3.5rem;
  width: 80%;
  user-select: none;

  @media ${device.mobileOverall} {
    width: 70%;
  }

  @media ${device.laptop} {
    width: 60%;
  }

  @media ${device.laptopL} {
    width: 40%;
  }
`

export const QualificationItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  column-gap: 1rem;
`

export const QualificationIndex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 3rem;
  width: 3rem;
  border-radius: 9999px;
  background-color: rgb(255 255 255);
`

export const QualificationContentRoot = styled.div`
  display: flex;
  flex-direction: column;
`

export const QualificationContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #fff;
  width: 80%;
`
