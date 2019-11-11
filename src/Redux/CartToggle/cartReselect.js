import { createSelector } from 'reselect'

const cartCollection = state => state.cart

export const cartCollectionItems =  createSelector(
 [cartCollection],
 cart=>  cart.collections 
)


export const cartCollectionCount = createSelector(
 [cartCollectionItems],
 collections => collections.reduce(
  (accululatedQuantity, cartItem) => 
  accululatedQuantity + cartItem.quantity,0)
)