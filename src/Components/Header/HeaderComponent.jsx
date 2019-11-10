import React from 'react'
import {ReactComponent as Logo} from "../../Assets/Crown.svg"
import {Link} from "react-router-dom"
import "./HeaderStyles.scss";
import {auth} from '../../FireBase/FireBaseUtils'
import {connect} from "react-redux";
import CartIconComponent from "../CartIcon/CartIconComponent";
import CartdropDown from "../CartDropdown/CartdropDownComponent";

function HeaderComponent({currentUser, hidden}) {
 return (
  <div className="header">
   <div className="logo-container">
    <Link to="/">
       <Logo/>
    </Link>
   </div>
    <div className="options">
       <Link className="option" to="/shop">SHOP</Link>
       <Link className="option" to="/shop">CONTACT</Link>
       {
         currentUser
         ? <Link className="option" to="/" onClick={() => auth.signOut()}>SIGN OUT</Link>
         : <Link className="option" to="/signIn">SIGN IN</Link>
       }
       <CartIconComponent/>
    </div>
    {
       hidden ? null : <CartdropDown/>
    }
  </div>
 )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
   currentUser, hidden
})


export default connect(mapStateToProps)(HeaderComponent)