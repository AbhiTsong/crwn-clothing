import { createSelector } from 'reselect'

export const cartCollection = state => state.cart

export const cartCollectionItems =  createSelector(
 [cartCollection],
 cart=>  cart.collections 
)

export const cartHiddenState = createSelector(
 [cartCollection],
 cartState => cartState.hidden
)

export const cartCollectionCount = createSelector(
 [cartCollectionItems],
 collection => collection.reduce(
  (accululatedQuantity, cartItem) => 
 ( accululatedQuantity + cartItem.quantity), 0)
)

export const cartCollectionTotal = createSelector(
  [cartCollectionItems],
  collections => collections.reduce(
    (accululatedQuantity, cartItem) => 
    accululatedQuantity + cartItem.quantity * cartItem.price, 0)
)