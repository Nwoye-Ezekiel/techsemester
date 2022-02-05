import * as API from "../../Services/apiServices";
import { Types } from "../Types/Types";

// action creators
// for register
export const registerUserStart = () => ({
  type: Types.REGISTER_USER_START,
});

export const registerUserSuccess = (user) => ({
  type: Types.REGISTER_USER_SUCCESS,
  payload: user,
});

export const registerUserFailure = (error) => ({
  type: Types.LOGIN_USER_FAILURE,
  payload: error,
});

// for login
export const loginUserStart = () => ({
  type: Types.LOGIN_USER_START,
});

export const loginUserSuccess = (user) => ({
  type: Types.LOGIN_USER_SUCCESS,
  payload: user,
});

export const loginUserFailure = (error) => ({
  type: Types.LOGIN_USER_FAILURE,
  payload: error,
});

// for user details
export const getUserDetailsStart = () => ({
  type: Types.GET_USER_DETAILS_START,
});

export const getUserDetailsSuccess = (user) => ({
  type: Types.GET_USER_DETAILS_SUCCESS,
  payload: user,
});

export const getUserDetailsFailure = (error) => ({
  type: Types.GET_USER_DETAILS_FAILURE,
  payload: error,
});

export const setPinFailure = (dispatch) => {
  dispatch({
    type: "SET_PIN_FAILURE",
  });
};

export const openQR = (dispatch) => {
  dispatch({
    type: "OPEN_QR",
  });
};

// Synchronous actions

// Asynchronous actions
export const registerUserAction = (data) => {
  return async (dispatch) => {
    try {
      dispatch(registerUserStart());
      await API.registerUser(data);
      dispatch(registerUserSuccess());
      alert("An email has been sent to you, do verify to login.");
    } catch (error) {
      alert(error);
      return dispatch(registerUserFailure(error.response?.data?.message));
    }
  };
};

export const loginUserAction = (data) => {
  return async (dispatch) => {
    try {
      dispatch(loginUserStart());
      const response = await API.loginUser(data);
      dispatch(loginUserSuccess(response.data));
    } catch (error) {
      alert(error);
      return dispatch(loginUserFailure(error.response?.data?.message));
    }
  };
};

export const getUserDetailsAction = (data) => {
  return async (dispatch) => {
    try {
      dispatch(getUserDetailsStart());
      const response = await API.getUserDetails(data);
      console.log("Response", response);
      dispatch(getUserDetailsSuccess(response.data));
    } catch (error) {
      console.log("Error", error);
      return dispatch(getUserDetailsFailure(error.response?.data?.message));
    }
  };
};
