import React from "react"
import styled from "styled-components"
import { device } from "../../utils/constants/common.constant"

const ApplyBtn = styled.button`
  width: 190px;
  height: 90px;

  /* red2orange/left/right */

  background: linear-gradient(262.9deg, #C83A41 8.25%, #D7525B 29.21%, #D24F66 71.52%, #C43E56 94.65%);
  border-radius: 30px;
  border: 0px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding-top: 30px; 
  padding-left: 20px; 
  padding-right: 20px; 
  padding-bottom: 20px; 

  color: #ffffff;

  @media ${device.mobileS} {
    padding-top: 15px; 
    padding-left: 10px; 
    padding-right: 10px; 
    padding-bottom: 10px; 
    width: 150px;
    height: 55px;
  }

  @media ${device.mobileOverall} {
    padding-top: 15px; 
    padding-left: 10px; 
    padding-right: 10px; 
    padding-bottom: 10px; 
    width: 170px;
    height: 60px;
  }
  
   &:hover{
       background: linear-gradient(262.9deg, #C43E56 8.25%, #D24F66 29.21%, #D7525B 71.52%, #C83A41 94.65%);
       animation:slidebg 0.5s infinite;
       animation-fill-mode: forwards;
   }

    &:active{
      background: #FFFFFF;
      & > button {
         background: #FFFFFF;
      }
      & > p {
        display: flex;
        justify-content: center;
        background: linear-gradient(93.44deg, #af3b43 100%, #ea727f 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    @keyframes slidebg {
      to {background: linear-gradient(262.9deg, #C83A41 8.25%, #D7525B 29.21%, #D24F66 71.52%, #C43E56 94.65%);}
    }

}`

const ApplyTxt = styled.p`
  font-family: CHULALONGKORN;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 30px;
  /* identical to box height */

  display: flex;

  @media ${device.mobileS}{
    padding-top: 10px; 
    padding-left: 10px; 
    padding-right: 10px; 
    padding-bottom: 10px; 
    font-size: 16px;
    line-height: 20px;
  }

  @media ${device.mobileOverall}{
    padding-top: 10px; 
    padding-left: 10px; 
    padding-right: 10px; 
    padding-bottom: 10px; 
    font-size: 18px;
    line-height: 20px;
  }

}`

interface ApplyButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const ApplyButton: React.FC<ApplyButtonProps> = ({ onClick }) => {
  return (
    <ApplyBtn onClick={onClick}>
      <ApplyTxt>สมัครค่ายและตรวจสอบสถานะ</ApplyTxt>
    </ApplyBtn>
  )
}

export default ApplyButton
