import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const getPostList = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/posts`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const postCreatePost = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/posts`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};
