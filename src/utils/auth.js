import Axios from "axios";
import qs from "qs";

const axios = Axios.create({
  baseURL: "https://ih-beers-api.herokuapp.com/auth",
  withCredentials: true,
  headers: { "content-type": "application/x-www-form-urlencoded" },
});

export const signup = (user) => {
  return axios({
    method: "POST",
    url: "signup",
    data: qs.stringify(user),
  }).then((response) => {
    setUser(response.data);
  });
};

export const login = (user) => {
  return axios({
    method: "POST",
    url: "login",
    data: qs.stringify(user),
  }).then((response) => {
    setUser(response.data);
    return response;
  });
};

export const logout = (user) => {
  return axios({
    method: "POST",
    url: "login",
    data: qs.stringify(user),
  }).then(() => {
    window.localStorage.removeItem("user");
    
  });
};

export const setUser = (user) => {
  window.localStorage.setItem("user", JSON.stringify(user));
};

export const getUser = (user) => {
  return JSON.parse(window.localStorage.getItem("user"));
};
