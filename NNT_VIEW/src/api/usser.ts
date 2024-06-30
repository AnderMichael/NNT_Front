import axios from "axios";
import { SERVER_URL } from "../config/config";

export const apiClient = axios.create({
  baseURL: SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const getUser = async () => {
    const res = await apiClient.get(`/users/66808f6dd7bc4655e99da4e4`         
    );
    console.log("resss", SERVER_URL,res.data)
    return res.data;
  };

  export const getAllUser = async () => {
    const res = await apiClient.get(`/users`         
    );
    return res.data;
  };
  