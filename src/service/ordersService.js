import axios from "axios";
const apiUrl = require("../constants/api");
const baseUrl = require("../constants/url");

const api = axios.create({
  baseURL: baseUrl.API_BASE_URL,
});

export const getListOrdersAll = async (token) => {
  try {
    const response = await api.get(apiUrl.get_list_orders, {
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

export const getListOrdersForType = async (token, type) => {
  const body = {
    status: type,
  };
  try {
    const response = await api.post(apiUrl.search_list_orders, body, {
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

export const getListOrdersForSearch = async (token, value) => {
  const body = {
    orderCode: value,
  };
  try {
    const response = await api.post(apiUrl.search_list_orders, body, {
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
