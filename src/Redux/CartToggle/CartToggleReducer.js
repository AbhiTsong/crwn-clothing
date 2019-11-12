import  toggleCartHidden from "./CartToggleType";
import addItemsToCart, {removeItem} from "./cartUtils";

const INITAIAL_STATE = {
 hidden: true,
 collections: []
}

function cartReducer (state = INITAIAL_STATE, actions) {
 switch (actions.type) {
  case toggleCartHidden.TOGGLE_CART_HIDDEN:
   return {
    ...state,
    hidden: !state.hidden
   }

   case toggleCartHidden.CLEAR_ITEM_FROM_CART:
     return{
       ...state,
       collections: state.collections.filter(cart => cart.id !== actions.payload.id)
     }
  
  case toggleCartHidden.ADD_ITEM:
    return{
    ...state,
    collections: addItemsToCart(state.collections, actions.payload)
  }
  case toggleCartHidden.REMOVE_ITEM:
    return{
      ...state,
      collections: removeItem(state.collections, actions.payload)
    }

    default:
    return state
  }
}

export default cartReducer; 