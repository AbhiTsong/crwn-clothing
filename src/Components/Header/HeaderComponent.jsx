import React from 'react'
import {ReactComponent as Logo} from "../../Assets/Crown.svg"
import {Link} from "react-router-dom"
import "./HeaderStyles.scss";
import {auth} from '../../FireBase/FireBaseUtils'
import {connect} from "react-redux"

function HeaderComponent({currentUser}) {
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
    </div>
  </div>
 )
}

const mapStateToProps = state => ({
   currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(HeaderComponent)