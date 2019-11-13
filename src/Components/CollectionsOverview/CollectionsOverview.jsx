import React from 'react';
import "./CollectonsOverview.scss"
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect"
import {selectCollectionForPreview} from '../../Redux/Shop/Shopselector';
import PreviewComponent from "../Preview/PreviewComponent"

function CollectionsOverview({collections}) {
 return (
  <div className="collections-overview">
   {
     collections.map(({id, ...otherCollectionProps}) => (
       <PreviewComponent key={id} {...otherCollectionProps}/>
     ))
    }
  </div>
 )
}

const mapStateToProps = createStructuredSelector({
 collections: selectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)