import React from 'react';
import "./PreviewStyles.scss"
import CollectionItems from "../CollectionItems/CollectionItems"

export default function PreviewComponent({items, title}) {
 return (
  <div className="collection-preview">
   <h1 className="title">{title.toUpperCase()}</h1>
   <div className="preview">
   {items.filter(
     (item, index) => index < 4)
      .map(menu => 
      {return(<CollectionItems key={menu.id} menu={menu}/>)})
   }
    </div>
  </div>
 )
}