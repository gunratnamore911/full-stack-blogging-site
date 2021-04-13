import axios from "axios";

import { GET_USER } from "./types";
import store from "../store";
export const getuser = (term) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const bod = {
    term: term,
  };

  try {
    const getres = await axios.post(`/api/videos/getvideos`, bod, config);

    if (getres.data) {
      store.dispatch({
        type: GET_VIDEOS,
        Payload: getres.data,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
