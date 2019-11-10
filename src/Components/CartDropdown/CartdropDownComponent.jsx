import React from 'react'
import CustomButton from "../CustomButton/CustomButtonComponent";
import "./CartdropDownStyles.scss"

export default function CartdropDown() {
 return (
  <div className="cart-dropdown">
    <div className="cart-items"></div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
 )
}
