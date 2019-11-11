import React from 'react'
import CustomButton from "../CustomButton/CustomButtonComponent";
import "./CartdropDownStyles.scss";
import CartItems from "../CartItems/CartItemsComponent"
import {connect} from "react-redux"
import {cartCollectionItems} from "../../Redux/CartToggle/cartReselect";
import {createStructuredSelector} from "reselect";
import {withRouter} from "react-router-dom";
import toggleCartAction from "../../Redux/CartToggle/CartToggleAction";

function CartdropDown({collections, history, dispatch}) {
 return (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        collections.length 
        ? (collections.map(collection => <CartItems collection={collection} key = {collection.id}/>))
        : (<span className="empty-message"> YOUR CART IS EMPTY </span>)
      }
    </div>
    <CustomButton 
      onClick = {() => {history.push("/checkout");
      dispatch(toggleCartAction())
    }  }>
      GO TO CHECKOUT
    </CustomButton>
  </div>
 )
}

const mapStateToProps = createStructuredSelector ({
  collections : cartCollectionItems
})

export default withRouter(connect(mapStateToProps)(CartdropDown));