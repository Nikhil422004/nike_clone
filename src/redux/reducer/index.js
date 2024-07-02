import handleFav from "./handleFav";
import handleCart from "./handleCart";
import { combineReducers } from "redux";
import userReducer from "./userReducer";

const rootReducers = combineReducers({
  user: userReducer,
  handleCart,
  handleFav,
});

export default rootReducers;
