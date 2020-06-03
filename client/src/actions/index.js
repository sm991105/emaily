import axios from "axios";
import { FETCH_USER } from "./types";

// action creator
export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("./api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

// res.data is the user model

export const handleToken = (token) => async (dispatch) => {
  const res = await axios.post("/api/stripe", token);
  dispatch({ type: FETCH_USER, payload: res.data });
};

// 같은 action type 을 사용
// we get the exact user model
