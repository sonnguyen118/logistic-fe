import axios from "axios";
const apiUrl = require("../constants/api");
const baseUrl = require("../constants/url");

const api = axios.create({
  baseURL: baseUrl.API_BASE_URL,
});

export const loginUser = async (userData) => {
  try {
    const response = await api.post(apiUrl.login, userData);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    return { success: false };
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await api.post(apiUrl.register, userData);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    return { success: false };
  }
};

export const getUser = async (token, id) => {
  try {
    const response = await api.get(apiUrl.get_user_by_id(id), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(response.data);
    return response.data;
  } catch (error) {
    return { success: false };
  }
};

export const updateUser = async (token, body) => {
  try {
    const response = await api.post(apiUrl.update_user_by_id, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(response.data);
    return response.data;
  } catch (error) {
    return { success: false };
  }
};
