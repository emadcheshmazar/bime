import axiosInstance from "./axiosSetup";

//GET request
export const getMethod = async (url: string) => {
  try {
    const response = await axiosInstance.get(url);
    console.log("OK");
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

//POST request
export const postMethod = async (url: string, body: SaveOrderRequest) => {
  try {
    const response = await axiosInstance.post(url, body);
    console.log("OK");
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
