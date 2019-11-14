import React from 'react'
import {ReactComponent as Logo} from "../../Assets/Crown.svg"
import {Link} from "react-router-dom"
import "./HeaderStyles.scss";
import {auth} from '../../FireBase/FireBaseUtils'
import {connect} from "react-redux";
import CartIconComponent from "../CartIcon/CartIconComponent";
import CartdropDown from "../CartDropdown/CartdropDownComponent";
import {createStructuredSelector} from "reselect";
import {currentUserState} from '../../Redux/users/userSelector';
import {cartHiddenState} from "../../Redux/CartToggle/cartReselect"

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
         ?(<div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>)
         : (<Link className="option" to="/signIn">SIGN IN</Link>)
       }
       <CartIconComponent/>
    </div>
    {
       hidden ? null : <CartdropDown/>
    }
  </div>
 )
}

const mapStateToProps = createStructuredSelector({
   currentUser: currentUserState,
   hidden: cartHiddenState
})


export default connect(mapStateToProps)(HeaderComponent)