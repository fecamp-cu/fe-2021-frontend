import React from "react";
import './Buttons.style.css';

interface ButtonProps {
    children: any
    typeButton: string
    typeText: string
    onClick: any

  }

const Button: React.FC<ButtonProps>=({ children, typeButton,typeText, onClick })=> {

    return <button className={typeButton} onClick={onClick}><p className={typeText}>{children}</p></button>

}

export default Button