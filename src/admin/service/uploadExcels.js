import axios from "axios";
const apiUrl = require("../constants/api");
const baseUrl = require("../../constants/url");

const api = axios.create({
  baseURL: baseUrl.API_BASE_URL,
});

// file api
export const uploadExcel = async (token, body) => {
  try {
    const response = await api.post(apiUrl.uploadExcel, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(response.data);
    return response.data;
  } catch (e) {
    // alert("Có vẻ như hệ thống database sự cố");
    return { success: false };
  }
};
