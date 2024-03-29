import React from 'react';
import "./MenuStyles.scss";
import {withRouter} from "react-router-dom"

 function MenuItems({title, imageUrl, size, linkUrl, match, history}) {
 return (

   <div 
   className={`${size} menu-item`}
   onClick={() => history.push(`${match.url}${linkUrl}`)}
   >
   <div
    className= "background-image"
    style={{backgroundImage: `url(${imageUrl})`}}/>
     <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
            <span className="sub-title">SHOP NOW</span>
        </div>
     </div>
 )
}

export default withRouter(MenuItems);