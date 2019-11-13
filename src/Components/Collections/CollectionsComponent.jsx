import React from 'react'
import {connect} from "react-redux";
import "./CollectionsStyles.scss"
import {selectCollection} from "../../Redux/Shop/Shopselector";
import CollectionItems from "../CollectionItems/CollectionItems"

const CollectionComponent = ({collection}) => {
 const {title, items} = collection;
 return (
  <div className="collection-page">
     <h2 className="title">{title}</h2>
     <div className="items">
        {
         items.map(menu => <CollectionItems key={menu.id} menu={menu}/>)
        }
     </div>
  </div>
 )
}

const mapStateToProps = (state, ownProps) => ({
   collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionComponent);