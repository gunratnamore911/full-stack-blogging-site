import { SET_ALERT } from "../actions/types";
import { REMOVE_ALERT } from "../actions/types";
const initialState = [];
function alertReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ALERT:
      return [...state, action.payload];

    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== action.payload);

    default:
      return state;
  }
}

export default alertReducer;
