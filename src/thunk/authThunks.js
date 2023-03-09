import axios from "axios";
import {
  userRequested,
  userReceived,
  userRequestFailed,
  userLoggedOut,
} from "../actions/authActions";

const API_BASE_URL = "http://192.168.0.100:5000";

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const registerThunk = (userData) => async (dispatch) => {
  dispatch(userRequested());

  try {
    const response = await api.post("/api/auth/register", userData);
    dispatch(userReceived(response.data));
  } catch (error) {
    dispatch(userRequestFailed(error.message));
  }
};

export const loginThunk = (userData) => async (dispatch) => {
  dispatch(userRequested());

  try {
    const response = await api.post("/api/auth/login", userData);
    dispatch(userReceived(response.data));
    console.log(response.data);
  } catch (error) {
    dispatch(userRequestFailed(error.message));
  }
};

export const logoutThunk = () => async (dispatch) => {
  dispatch(userRequested());

  try {
    await api.post("/api/auth/logout");
    dispatch(userLoggedOut());
  } catch (error) {
    dispatch(userRequestFailed(error.message));
  }
};
