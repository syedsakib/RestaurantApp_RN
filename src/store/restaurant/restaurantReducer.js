import { GET_RESTAUTANTS } from "./restaurantTypes";

const initialState = {
  restaurants: [],
  restaurant: {},
  loading: false,
  error: null,
};

export const restautantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESTAUTANTS:
      return {
        ...state,
        restaurants: action.payload,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};
