import { GET_RESTAUTANTS } from "./restaurantTypes";

export const fetchRestaurants = () => async (dispatch) => {
  dispatch({
    type: GET_RESTAUTANTS,
    payload: [
      "restaurant 1",
      "restaurant 2",
      "restaurant 3",
      "restaurant 4",
      "restaurant 5",
    ],
  });
};
