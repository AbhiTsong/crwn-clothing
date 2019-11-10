import React from 'react';
import "./PreviewStyles.scss"
import CollectionComponent from "../Collections/CollectionComponent"

export default function PreviewComponent({items, title}) {
 return (
  <div className="collection-preview">
   <h1 className="title">{title.toUpperCase()}</h1>
   <div className="preview">
   {items.filter(
     (item, index) => index < 4)
      .map((menu) => 
      {return(<CollectionComponent key={menu.id} menu={menu}/>)})
   }
    </div>
  </div>
 )
}