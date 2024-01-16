import { AxiosResponse } from "axios";
import axiosInstance from "./axiosSetup";

export const getMethod = async (url: string): Promise<any> => {
  try {
    const response: AxiosResponse = await axiosInstance.get(url);
    console.log("OK");
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const postMethod = async (url: string, body: SaveOrderRequest): Promise<any> => {
  try {
    const response: AxiosResponse = await axiosInstance.post(url, body);
    console.log("OK");
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
