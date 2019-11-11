import React from 'react'
import CustomButton from "../CustomButton/CustomButtonComponent";
import "./CartdropDownStyles.scss";
import CartItems from "../CartItems/CartItemsComponent"
import {connect} from "react-redux"

function CartdropDown({collections}) {
 return (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        collections.map(collection => <CartItems collection={collection} key = {collection.id}/>)
      }
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
 )
}

const mapStateToProps = ({cart: {collections}}) => ({
  collections
})

export default connect(mapStateToProps)(CartdropDown);