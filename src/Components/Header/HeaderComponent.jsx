import React from 'react'
import {ReactComponent as Logo} from "../../Assets/Crown.svg"
import {Link} from "react-router-dom"
import "./HeaderStyles.scss";
import {auth} from '../../FireBase/FireBaseUtils'

export default function HeaderComponent({currentUser}) {
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
         : <Link className="option" to="/signin">SIGN IN</Link>
       }
    </div>
  </div>
 )
}