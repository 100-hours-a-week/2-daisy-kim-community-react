import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const postCreateComment = async (postId, data) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/posts/${postId}/comments`,
      data
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};
