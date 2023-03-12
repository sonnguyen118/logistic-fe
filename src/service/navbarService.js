import axios from "axios";
const apiUrl = require("../constants/api");
const baseUrl = require("../constants/url");

const api = axios.create({
  baseURL: baseUrl.API_BASE_URL,
});

// file api
export const getNavbar = async () => {
  try {
    const response = await api.get(apiUrl.get_navbar);
    // console.log(response.data);
    return response.data;
  } catch (e) {
    // alert("Có vẻ như hệ thống database sự cố");
    return { success: false };
  }
};
