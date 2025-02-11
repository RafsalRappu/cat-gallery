import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import config from "../config/index";
import { useApiErrorHandler } from "../hooks/useApiErrorHandler";

let instance: AxiosInstance;
const handleError = useApiErrorHandler();

export const Http = {
  /**
   * Creates a new Axios instance with the specified base URL.
   *
   * @param baseUrl - The base URL for the Axios instance.
   * @returns The created Axios instance.
   */
  createInstance: (baseUrl: string): AxiosInstance => {
    instance = axios.create({
      baseURL: config.API_HOST,
      headers: {
        "Content-Type": "application/json",
      },
    });

    instance.interceptors.request.use(
      (config) => {
        const accessToken = localStorage.getItem("token");
        if (accessToken) {
          config.headers["Authorization"] = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    instance.interceptors.response.use(
      (response) => response,
      (error) => {
        handleError(error);
        return Promise.reject(error);
      }
    );

    return instance;
  },

  /**
   * Sets a custom header for the Axios instance.
   *
   * @param name - The name of the header.
   * @param value - The value of the header.
   */
  setHeader: (name: string, value: string) => {
    instance.defaults.headers.common[name] = value;
  },
};

export const http = {
  get: (url: string, config?: AxiosRequestConfig) => instance.get(url, config),
  post: (url: string, data?: any, config?: AxiosRequestConfig) =>
    instance.post(url, data, config),
  put: (url: string, data?: any, config?: AxiosRequestConfig) =>
    instance.put(url, data, config),
  patch: (url: string, data?: any, config?: AxiosRequestConfig) =>
    instance.patch(url, data, config),
  delete: (url: string, config?: AxiosRequestConfig) =>
    instance.delete(url, config),
};

/**
 * The default Axios instance configured with the base URL from the config.
 */
export const Api = Http.createInstance(config.API_HOST || "");
