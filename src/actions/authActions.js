import { createAction } from "@reduxjs/toolkit";
import {
  USER_REQUESTED,
  USER_RECEIVED,
  USER_REQUEST_FAILED,
  USER_LOGGED_OUT,
} from "../constants/authConstants";

export const userRequested = createAction(USER_REQUESTED);
export const userReceived = createAction(USER_RECEIVED);
export const userRequestFailed = createAction(USER_REQUEST_FAILED);
export const userLoggedOut = createAction(USER_LOGGED_OUT);
