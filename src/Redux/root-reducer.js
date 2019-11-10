import {combineReducers} from "redux";

import userReducer from "./users/userReducer";
import cartReducer from "./CartToggle/CartToggleReducer"

export default combineReducers({
  user: userReducer,
  cart: cartReducer
});