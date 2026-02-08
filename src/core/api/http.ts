import axios, { type InternalAxiosRequestConfig } from "axios";
import { storageUtils } from "@/lib/tokens";
import { authApi } from "@/core/auth/api.auth.service";
import { PATH_REFRESH_TOKEN, PATH_SIGNIN } from "@/lib/links/paths";
export const http = axios.create({
  baseURL: import.meta.env.DEV
    ? import.meta.env.VITE_DEV_URL
    : import.meta.env.VITE_PROD_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true,
});

// Request interceptor for attaching tokens
http.interceptors.request.use((config) => {
  const token = storageUtils.getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor for data unwrapping and token refresh
http.interceptors.response.use(
  (response) => response.data,
  async (error) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };
    // Paths that should NOT trigger a retry/refresh
    const isAuthRequest =
      originalRequest.url === PATH_SIGNIN ||
      originalRequest.url === PATH_REFRESH_TOKEN;

    // Handle 401 Unauthorized errors
    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !isAuthRequest
    ) {
      originalRequest._retry = true;

      try {
        const res = await authApi.refresh();
        const newToken = res?.data?.token;

        console.log("Token Refreshed Successfully:", !!newToken);

        if (newToken) {
          // Update the token in localStorage
          storageUtils.setToken(newToken);

          // Update headers for current retry and future requests
          originalRequest.headers.Authorization = `Bearer ${newToken}`;
          http.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;

          return http(originalRequest);
        }
      } catch (refreshError) {
        // If refresh fails, sign out the user
        storageUtils.removeToken();
        storageUtils.removeUser();
        window.location.href = PATH_SIGNIN;

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);
