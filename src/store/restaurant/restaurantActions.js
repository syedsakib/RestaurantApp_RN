import {
  GET_RESTAUTANTS,
  GET_RESTAUTANTS_ERROR,
  GET_RESTAUTANTS_SUCCESS,
} from "./restaurantTypes";
import homeRestaurantsData from "./homeRestaurantsData";

export const fetchRestaurants = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_RESTAUTANTS,
    });
    dispatch({
      type: GET_RESTAUTANTS_SUCCESS,
      payload: homeRestaurantsData,
    });
  } catch (error) {
    dispatch({
      type: GET_RESTAUTANTS_ERROR,
      payload: "Something Went Wrong! Please Try Again, Later...",
    });
  }
};
