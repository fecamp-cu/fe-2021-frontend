import styled, { css } from "styled-components"
import { device } from "../../../utils/constants/common.constant"

export const TimelineRoot = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 0.25rem;
  color: #fff;
  font-weight: 500;
  user-select: none;
`

export type ScheduleItemProps = {
  isLive: boolean
}

export const ScheduleItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 20px;
  width: 90%;
  height: 4.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  border-radius: 1rem;
  border: 2px solid #ffffff;
  font-size: 0.9rem;
  font-family: "Bai Jamjuree", sans-serif;
  background-color: rgba(255, 255, 255, 0.2);

  ${(props: ScheduleItemProps) =>
    props.isLive &&
    css`
      background-color: rgba(255, 255, 255, 0.5);
    `}

  @media ${device.mobileOverall} {
    font-size: 1.25rem;
  }

  @media ${device.laptop} {
    width: 70%;
    font-size: 1.25rem;
    column-gap: 40px;
  }

  @media ${device.laptopL} {
    width: 50%;
    font-size: 1.25rem;
    column-gap: 40px;
  }
`

export const Time = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
`
