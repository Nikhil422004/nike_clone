import handleFav from "./handleFav";
import handleCart from "./handleCart";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  handleCart,
  handleFav,
});

export default rootReducers;
