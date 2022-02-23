import styled from "styled-components"
import { device } from "../constants/common.constant"

export const Label = styled.h1`
  color: #fff;
  font-size: 2.5rem;
  line-height: 4rem;
  font-weight: 700;
  user-select: none;

  @media ${device.mobileOverall} {
    font-size: 3.5rem;
    line-height: 6rem;
  }

  @media ${device.laptop} {
    font-size: 4.5rem;
    line-height: 6rem;
  }
`

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
  width: 100%;
`
