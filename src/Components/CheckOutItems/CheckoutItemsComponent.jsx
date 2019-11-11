import React from 'react';
import "./CheckoutStyles.scss";


function CheckoutItems({cartItems: {name, quantity, price, imageUrl}}) {
 return (
  <div className="checkout-item">
    <div className="image-container">
      <img src = {imageUrl} alt="item"/>
    </div>
    <div className="name">{ name }</div>
    <div className="quantity">{ quantity }</div>
    <div className="price">{ price }  { quantity}</div>
    <span className="remove-button">&#10005;</span>
  </div>
 )
}

export default CheckoutItems;