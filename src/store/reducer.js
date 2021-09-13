import { combineReducers } from "redux";
import { reducer as recommendReducer } from "../pages/discover/c-pages/recommend/store";

const rootReducer = combineReducers({
  recommend: recommendReducer,
});

export default rootReducer;
