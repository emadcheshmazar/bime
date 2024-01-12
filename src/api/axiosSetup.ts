import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

console.log(BASE_URL, "baseUrl");

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

// Add a response interceptor to log success or error
axiosInstance.interceptors.response.use(
  (response) => {
    // Log success for status code 200
    if (response.status === 200) {
      console.log("OK");
    }
    return response;
  },
  (error) => {
    // Log error for non-OK status codes
    console.error("Error:", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
