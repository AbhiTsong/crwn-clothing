import {createSelector} from "reselect";

const selectShop = state => state.shop;

export const selectCollections = createSelector(
 [selectShop],
 shop => shop.collections 
) 

export const selectCollectionForPreview = createSelector(
 [selectCollections],
 previewItem => Object.keys(previewItem).map(key => previewItem[key])
)

export const selectCollection = collectionUrlParam => {
 return createSelector(
  [selectCollections],
  collections => collections[collectionUrlParam] 
 )
} 
