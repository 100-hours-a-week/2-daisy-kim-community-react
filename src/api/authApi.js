import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const postSignup = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/users`, data);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const postLogin = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/sessions`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};
