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

export const getCommentList = async (postId) => {
  try {
    const response = await axios.get(`${BASE_URL}/posts/${postId}/comments`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const patchEditComment = async (postId, commentId, data) => {
  try {
    const response = await axios.patch(
      `${BASE_URL}/posts/${postId}/comments/${commentId}`,
      data
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};
