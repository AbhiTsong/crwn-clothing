import {combineReducers} from "redux";

import userReducer from "./users/userReducer";
import cartReducer from "./CartToggle/CartToggleReducer"
import directoryReducer from "./Directory/DirectoryReducer"
import shopReducer from "./Shop/ShopReducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});
