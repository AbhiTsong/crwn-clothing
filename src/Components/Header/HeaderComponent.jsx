import React from 'react'
import {ReactComponent as Logo} from "../../Assets/Crown.svg"
import {Link} from "react-router-dom"
import "./HeaderStyles.scss"

export default function HeaderComponent() {
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
    </div>
  </div>
 )
}
