import React from 'react';
import CollectionsOverview from "../../Components/CollectionsOverview/CollectionsOverview";
import {Route} from "react-router-dom";
import CollectionComponent from "../../Components/Collections/CollectionsComponent"


const ShopPage  = ({match}) => {
   return(
   <div>
      <Route exact path={`${match.path}`} component={CollectionsOverview}/>
      <Route path={`${match.path}/:collectionId`} component={CollectionComponent}/>
   </div>
)}

export default ShopPage;
