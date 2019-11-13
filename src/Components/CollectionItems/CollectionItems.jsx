import React from 'react'
import "./CollectionStyles.scss"
import CustomButton from "../CustomButton/CustomButtonComponent"
import {addItem} from "../../Redux/CartToggle/CartToggleAction" 
import {connect} from "react-redux"


const CollectionItems = ({menu, addItems}) => {
  const {name, imageUrl, price} = menu;
 return (
  <div className="collection-item ">
   <div
    style ={{
     backgroundImage : `url(${imageUrl})`
    }}
    className="image"
   />
   <div className="collection-footer">
     <p className="name">{name}</p>
     <p className="price">{price}</p>
   </div>
   <CustomButton
   onClick = {() => addItems(menu)}
   inverted>Add To Cart</CustomButton>
  </div>
 )
}

const mapDispatchToProps = dispatch => ({
  addItems: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItems);
