import  toggleCartHidden from "./CartToggleType";

const INITAIAL_STATE = {
 hidden: true
}

function cartReducer (state= INITAIAL_STATE, actions) {
 switch (actions.type) {
  case toggleCartHidden.TOGGLE_CART_HIDDEN:
   return {
    ...state,
    hidden: !state.hidden
   }
  default:
   return state
 }
}

export default cartReducer;