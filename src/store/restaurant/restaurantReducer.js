import {
  GET_RESTAUTANTS,
  GET_RESTAUTANTS_ERROR,
  GET_RESTAUTANTS_SUCCESS,
} from "./restaurantTypes";

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
        loading: true,
        error: null,
      };
    case GET_RESTAUTANTS_SUCCESS:
      return {
        ...state,
        restaurants: action.payload,
        loading: false,
        error: null,
      };
    case GET_RESTAUTANTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
