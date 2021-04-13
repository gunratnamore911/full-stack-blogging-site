import { REGISTER_SUCCESS, REGISTER_FAIL } from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticatd: null,
  loading: true,
  user: null,
};
export default function (state = initialState, action) {
  const { type, action } = action;
  switch (type) {
    case REGISTER_SUCCESS:
      localStorage.getItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticatd: true,
        loading: false,
      };

    case REGISTER_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticatd: false,
        loading: false,
      };

    default:
      return state;
  }
}
