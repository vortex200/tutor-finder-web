import ACTIONS from "./index";
import axios from "axios";
import Config from "Utils/Config";

export const fetchAllUsers = async (token) => {
  const res = await axios.get(Config.BACKEND_URL + "/user/all_infor", {
    headers: { Authorization: token },
  });
  return res;
};

export const dispatchGetAllUsers = (res) => {
  return {
    type: ACTIONS.GET_ALL_USERS,
    payload: res.data,
  };
};
