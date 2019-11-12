import  toggleCartHidden from "./CartToggleType";

const toggleCartAction = () => ({
 type: toggleCartHidden.TOGGLE_CART_HIDDEN
})

export const addItem = item => ({
 type: toggleCartHidden.ADD_ITEM,
 payload: item
})

export const clearItemFromCart = item =>({
 type: toggleCartHidden.CLEAR_ITEM_FROM_CART,
 payload: item
})

export const removeItem = item => ({
 type: toggleCartHidden.REMOVE_ITEM,
 payload: item
})

export default toggleCartAction;