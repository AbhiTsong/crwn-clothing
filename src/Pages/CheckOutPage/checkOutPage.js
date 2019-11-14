import React from 'react';
import "./checkOutStyles.scss";
import {cartCollectionTotal, cartCollectionItems} from "../../Redux/CartToggle/cartReselect";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import CheckoutItems from "../../Components/CheckOutItems/CheckoutItemsComponent"
import StripeCheckoutButton from "../../Components/Stripe/StripeComponent"


const checkOutPage = ({total, checkOutItems}) => {
 return (
  <div className="checkout-page">
     <div className="checkout-header">
      <div className="header-block">
       <span>Product</span>
      </div>
      <div className="header-block">
       <span>Description</span>
      </div>
      <div className="header-block">
       <span>Quantity</span>
      </div>
      <div className="header-block">
       <span>Price</span>
      </div>
      <div className="header-block">
       <span>Remove</span>
      </div>
     </div>
     {
        checkOutItems.map(item => <CheckoutItems key={item.id} cartItems={item}/>)
     }
     <div className="total"><h3>TOTAL: $ {total}</h3></div>
     <div className="test-warning">
        ** Please use the following information for paymant **
        <br/>
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
     </div>
     <StripeCheckoutButton price={total}/>
  </div>
 )
}

const mapStateToProps = createStructuredSelector({
   total: cartCollectionTotal,
   checkOutItems: cartCollectionItems
})

export default connect(mapStateToProps)(checkOutPage);