import React from "react"
import { Route, Routes } from "react-router-dom"
import Example from "./pages/Example/Example"
import Button from './components/Buttons/Buttons'
import BasketLogo from "./assets/images/shopping_basket.png"
import AddToCartButton from "./components/Buttons/AddToCartButton"

function App() {
  return (
    <div className="App">
      <Button typeButton={"addToCartButton"} typeText={"whiteNormalText"} onClick={""}><img src={BasketLogo}></img>เพิ่มลงตะกร้า</Button>
      <AddToCartButton onClick={""}></AddToCartButton>
    </div>
  );
}

export default App
