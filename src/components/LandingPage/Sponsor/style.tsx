import styled from "styled-components"
import { device } from "../../../utils/constants/common.constant"
import { Root } from "../../../utils/style/common"

export const SponsorRoot = styled(Root)`
  row-gap: 2.5rem;
`

export const SponsorItemRoot = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  row-gap: 1rem;
  column-gap: 1rem;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 1.5rem;
  margin-bottom: 2.5rem;
  width: 80%;

  @media ${device.mobileOverall} {
    column-gap: 2.5rem;
    width: 90%;
  }

  @media ${device.laptop} {
    column-gap: 2.5rem;
    width: 75%;
  }
`
