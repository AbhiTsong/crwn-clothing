import React from 'react';
import "./CheckoutStyles.scss";
import {connect} from 'react-redux';
import {clearItemFromCart, removeItem, addItem} from "../../Redux/CartToggle/CartToggleAction";


function CheckoutItems({cartItems, cartItemToRemove, addItem, removeItem}) {
  const {name, quantity, price, imageUrl} = cartItems
 return (
  <div className="checkout-item">
    <div className="image-container">
      <img src = {imageUrl} alt="item"/>
    </div>
    <div className="name">{ name }</div>
    <div className="quantity">
      <div className="arrow" onClick={() => removeItem(cartItems)}>&#10094;</div>
        <span className="value">{ quantity }</span>
      <div className="arrow" onClick={() => addItem(cartItems)}>&#10095;</div>      
    </div>
    <div className="price">{ price }</div>
    <span className="remove-button" onClick={() => cartItemToRemove(cartItems)}>&#10005;</span>
   
  </div>
 )
}

const mapDispatchToProps = dispatch => ({
  cartItemToRemove: item => dispatch(clearItemFromCart(item)),
  addItem : item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItems);