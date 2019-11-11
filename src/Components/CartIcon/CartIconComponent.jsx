import React from 'react'
import {ReactComponent as ShoppingIcon} from "../../Assets/shopping-bag.svg";
import "./CartIconStyles.scss";
import {connect} from "react-redux"
import toggleCartAction from "../../Redux/CartToggle/CartToggleAction";
import {cartCollectionCount} from "../../Redux/CartToggle/cartReselect";



function CartIconComponent({toggleCartHidden, itemCount}) {
 return (
  <div className = "cart-icon" onClick={toggleCartHidden}>
   <ShoppingIcon className="shopping-icon"/>
   <span className="item-count">{itemCount}</span>
  </div>
 )
}

const mapDispatchToProps = dispatch => ({
 toggleCartHidden: () => dispatch(toggleCartAction())
})

const mapStateToProps = state => ({
 itemCount: cartCollectionCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIconComponent);