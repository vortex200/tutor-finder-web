import ACTIONS from "./index";
import http from "Utils/http-common";

export const dispatchLogin = () => {
  return {
    type: ACTIONS.LOGIN,
  };
};

export const fetchUser = async (token) => {
  const res = await http.get("/user/infor", {
    headers: { Authorization: token },
  });
  return res;
};

export const dispatchGetUser = (res) => {
  return {
    type: ACTIONS.GET_USER,
    payload: {
      user: res.data,
      isAdmin: res.data.role === 1 ? true : false,
    },
  };
};
