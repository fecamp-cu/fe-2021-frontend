import React from "react";
import './AddToCartButton.style.css';
import BasketLogo from "../../assets/images/shopping_basket.png"

interface AddToCartButtonProps {
    onClick: any

  }

  const AddToCartButton: React.FC<AddToCartButtonProps>=({onClick })=> {

    return <button className="addToCartButton" onClick={onClick}><p className="whiteNormalText"><img src = {BasketLogo} className="img"></img>เพิ่มลงตะกร้า</p></button>

}

  export default AddToCartButton