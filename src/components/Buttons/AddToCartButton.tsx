import React from "react";
import './AddToCartButton.style.css';
import { IoMdBasket } from 'react-icons/io';


interface AddToCartButtonProps {
    onClick: (e:React.MouseEvent<HTMLButtonElement>) => void

  }

  const AddToCartButton: React.FC<AddToCartButtonProps>=({onClick })=> {

    return <button className="addToCartButton" onClick={onClick}><p className="whiteNormalText"><IoMdBasket className="img"></IoMdBasket>เพิ่มลงตะกร้า</p></button>

}

  export default AddToCartButton