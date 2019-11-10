import React from 'react'
import {ReactComponent as ShoppingIcon} from "../../Assets/shopping-bag.svg";
import "./CartIconStyles.scss";
import {connect} from "react-redux"
import toggleCartAction from "../../Redux/CartToggle/CartToggleAction";



function CartIconComponent({toggleCartHidden}) {
 return (
  <div className = "cart-icon" onClick={toggleCartHidden}>
   <ShoppingIcon className="shopping-icon"/>
   <span className="item-count">0</span>
  </div>
 )
}

const mapDispatchToProps = dispatch => ({
 toggleCartHidden: () => dispatch(toggleCartAction())
})

export default connect(null, mapDispatchToProps)(CartIconComponent);