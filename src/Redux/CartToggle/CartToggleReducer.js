import  toggleCartHidden from "./CartToggleType";
import addItemsToCart from "./cartUtils";

const INITAIAL_STATE = {
 hidden: true,
 collections: []
}

function cartReducer (state= INITAIAL_STATE, actions) {
 switch (actions.type) {
  case toggleCartHidden.TOGGLE_CART_HIDDEN:
   return {
    ...state,
    hidden: !state.hidden
   }
  
  case toggleCartHidden.ADD_ITEM:
    return{
      ...state,
      collections: addItemsToCart(state.collections, actions.payload)}
    default:
    return state
  }
}

export default cartReducer;