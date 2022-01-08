import React from "react";
import './Buttons.style.css';

interface ButtonProps {
    typeButton: string
    typeText: string
    onClick: (e:React.MouseEvent<HTMLButtonElement>) => void

  }

const Button: React.FC<ButtonProps>=({ children, typeButton,typeText, onClick })=> {

    return <button className={typeButton} onClick={onClick}><p className={typeText}>{children}</p></button>

}

export default Button