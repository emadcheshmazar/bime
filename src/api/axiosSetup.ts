import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

console.log(BASE_URL, "baseUrl");

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});


axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error("Error:", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
