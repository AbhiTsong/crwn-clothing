import React from 'react'
import "./CartItemStyles.scss"

export default function CartItems({collection:{imageUrl, name, price, quantity}}) {
 return (
  <div className="cart-item">
    <img src = {imageUrl} alt="items"/>
    <div className="item-details">
       <span className="name"> {name} </span>
       <span className="name"> {quantity} * ${price} </span>
    </div>
  </div>
 )
}
