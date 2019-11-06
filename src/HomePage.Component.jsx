import React from 'react'
import "./HomePage.Styles.scss"

export default function HomePage() {
 return (
  <div className="homepage">
   <div className="directory-menu">
     <div className="menu-item">
      <div className="content">
       <h1 className="title">Hats</h1>
         <span className="sub-title">Shop Now</span>
      </div>
     </div>
     <div className="menu-item">
      <div className="content">
       <h1 className="title">Jacket</h1>
         <span className="sub-title">Shop Now</span>
      </div>
     </div>
     <div className="menu-item">
      <div className="content">
       <h1 className="title">Shoes</h1>
         <span className="sub-title">Shop Now</span>
      </div>
     </div>
     <div className="menu-item">
      <div className="content">
       <h1 className="title">Mens</h1>
         <span className="sub-title">Shop Now</span>
      </div>
     </div>
     <div className="menu-item">
      <div className="content">
       <h1 className="title">Womens</h1>
         <span className="sub-title">Shop Now</span>
      </div>
     </div>
   </div>
  </div>
 )
}
