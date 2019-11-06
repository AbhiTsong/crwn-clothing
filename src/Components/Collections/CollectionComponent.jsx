import React from 'react'
import "./CollectionStyles.scss"

function CollectionComponent({id, name, imageUrl, price}) {
 return (
  <div className="collection-item ">
   <div
    style ={{
     backgroundImage : `url(${imageUrl})`
    }}
    className="image"
   />
   <div key={id} className="collection-footer">
     <p className="name">{name}</p>
     <p className="price">{price}</p>
   </div>
  </div>
 )
}

export default CollectionComponent;
