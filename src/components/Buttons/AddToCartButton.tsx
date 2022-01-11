import React from "react";
import styled from 'styled-components';
import { IoMdBasket } from 'react-icons/io';


const Button = styled.button`

  width: 395px;
  height: 40px;

  background: #ab3a41;
  border-radius: 5px;
  border: 0px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);

  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding-top: 10px;

  @media (max-width: 390px) {

    width: 330px;
    height: 30px;

  }
`;

const WhiteText = styled.a`

  font-family: CHULALONGKORN;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: right;

  color: #ffffff;

  @media (max-width: 390px) {
    position: absolute;
    font-size: 14px;
    line-height: 21px;

  }
`;

const Logo = styled.div`
  margin-right: 10px;
  margin-bottom: 10px;
  
`;

interface AddToCartButtonProps {
  onClick: any

}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ onClick }) => {

  return <Button onClick={onClick}><WhiteText><Logo><IoMdBasket></IoMdBasket></Logo>เพิ่มลงตะกร้า</WhiteText></Button>

}

export default AddToCartButton