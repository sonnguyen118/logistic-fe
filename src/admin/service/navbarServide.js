import axios from "axios";
const apiUrl = require("../constants/api");
const baseUrl = require("../../constants/url");

const api = axios.create({
  baseURL: baseUrl.API_BASE_URL,
});

// file api
export const getDataNavbar = async (menuId, userId) => {
  try {
    let body = {
      menuId: menuId,
      userId: userId,
    };
    const response = await api.post(apiUrl.get_navbar, body);
    // console.log(response.data);
    return response.data;
  } catch (e) {
    // alert("Có vẻ như hệ thống database sự cố");
    return { success: false };
  }
};
