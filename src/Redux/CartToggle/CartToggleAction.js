import  toggleCartHidden from "./CartToggleType";

const toggleCartAction = () => ({
 type: toggleCartHidden.TOGGLE_CART_HIDDEN
})

export const addItem = item => ({
 type: toggleCartHidden.ADD_ITEM,
 payload: item
})

export default toggleCartAction;