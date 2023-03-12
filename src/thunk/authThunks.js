import axios from "axios";
import {
  userRequested,
  userReceived,
  userRequestFailed,
  userLoggedOut,
} from "../actions/authActions";
const apiUrl = require("../constants/api");
const baseUrl = require("../constants/url");

const api = axios.create({
  baseURL: baseUrl.API_BASE_URL,
});

export const registerThunk = (userData) => async (dispatch) => {
  dispatch(userRequested());

  try {
    const response = await api.post(apiUrl.register, userData);
    dispatch(userReceived(response.data));
  } catch (error) {
    dispatch(userRequestFailed(error.message));
  }
};

export const loginThunk = (userData) => async (dispatch) => {
  dispatch(userRequested());
  try {
    await api
      .post(apiUrl.login, userData)
      .then((response) => {
        if (response.data.success) {
          dispatch(userReceived(response.data));
          console.log(response.data.data, "respensei");
        } else {
          dispatch(userReceived());
          dispatch(userRequestFailed(response.data));
          console.log(response.data.message, "ty");
        }
      })
      .catch((error) => console.log(error));
  } catch (error) {
    dispatch(userRequestFailed(error.message));
    console.log(error, "respensei");
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
