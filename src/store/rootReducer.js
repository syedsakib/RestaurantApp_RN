import { combineReducers } from "redux";

import { restautantsReducer } from "./restaurant/restaurantReducer";

export default combineReducers({
  restaurants: restautantsReducer,
});
