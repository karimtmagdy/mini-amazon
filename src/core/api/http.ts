import axios from "axios";
import { storageUtils } from "@/lib/tokens";

export const http = axios.create({
  baseURL: import.meta.env.VITE_PROD_URL ?? import.meta.env.VITE_DEV_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Credentials": "true",
    // "Access-Control-Allow-Origin": "*",
    // "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    // "Access-Control-Allow-Headers": "Content-Type, Authorization",
  },
  withCredentials: true,
});

http.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error),
);

http.interceptors.request.use((config) => {
  const token = storageUtils.getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
