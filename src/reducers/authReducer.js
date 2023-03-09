import {
  USER_REQUESTED,
  USER_RECEIVED,
  USER_REQUEST_FAILED,
  USER_LOGGED_OUT,
} from "../constants/authConstants";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case USER_RECEIVED:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: null,
      };
    case USER_REQUEST_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case USER_LOGGED_OUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
