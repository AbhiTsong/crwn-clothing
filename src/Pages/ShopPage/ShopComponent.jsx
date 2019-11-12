import React from 'react';
import PreviewComponent from "../../Components/Preview/PreviewComponent"
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import selectCollections from "../../Redux/Shop/Shopselector"

const ShopPage  = ({collections}) => (
 <div>
    {
     collections.map(({id, ...otherCollectionProps}) => (
       <PreviewComponent key={id} {...otherCollectionProps}/>
     ))
    }
   </div>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})

export default connect(mapStateToProps)(ShopPage);
