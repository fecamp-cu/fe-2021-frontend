import React from "react"
import styled from "styled-components"

const ApplyBtn = styled.button`
  width: 194px;
  height: 67px;

  /* red2orange/left/right */

  background: linear-gradient(262.9deg, #C83A41 8.25%, #D7525B 29.21%, #D24F66 71.52%, #C43E56 94.65%);
  border-radius: 30px;
  border: 0px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding-top: 10px; 

  color: #ffffff;
  

  @media (max-width: 390px) {
      width: 148px;
      height: 49px;
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
  font-size: 36px;
  line-height: 54px;
  /* identical to box height */

  display: flex;


  @media (max-width: 390px){
    font-size: 28px;
    line-height: 42px;
  }
}`

interface ApplyButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const ApplyButton: React.FC<ApplyButtonProps> = ({ onClick }) => {
  return (
    <ApplyBtn onClick={onClick}>
      <ApplyTxt>สมัครค่าย</ApplyTxt>
    </ApplyBtn>
  )
}

export default ApplyButton
