import {createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
import root_Reducer from "./root-reducer";

const middleWare = [logger];

const store = createStore(root_Reducer, applyMiddleware(...middleWare));

export default store;