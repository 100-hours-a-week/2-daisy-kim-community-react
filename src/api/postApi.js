import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const getPostList = async () => {
  const response = await axios.get(`${BASE_URL}/posts`);
  return response.data;
};
