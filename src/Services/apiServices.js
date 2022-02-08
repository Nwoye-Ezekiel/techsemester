import axios from "axios";
import { loginUrl, registerUrl, userDetailsUrl, postQuestionUrl } from "./urls";

export const loginUser = (data) => {
  return axios({
    method: "POST",
    url: loginUrl,
    data,
  });
};
export const registerUser = (data) => {
  return axios({
    method: "POST",
    url: registerUrl,
    data,
  });
};
export const getUserDetails = (data) => {
  return axios({
    method: "GET",
    url: userDetailsUrl,
    data,
  });
};
export const postQuestion = (token, data) => {
  return axios({
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "POST",
    url: postQuestionUrl,
    data,
  });
};
