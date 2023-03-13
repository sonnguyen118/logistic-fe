import axios from "axios";
const apiUrl = require("../constants/api");
const baseUrl = require("../../constants/url");

const api = axios.create({
  baseURL: baseUrl.API_BASE_URL,
});

// file api
export const getSystemPost = async (token, link, body) => {
  try {
    const response = await api.post(apiUrl.get_sytempost_by_id(link), body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (e) {
    // alert("Có vẻ như hệ thống database sự cố");
    return { success: false };
  }
};

export const updateSystemPost = async (token, body) => {
  console.log("đã gửi api");
  console.log(token, body);
  try {
    const response = await api.post(apiUrl.update_sytempost, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (e) {
    // alert("Có vẻ như hệ thống database sự cố");
    return { success: false };
  }
};
