import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { getToken } from './token';
import { AxiosResponse, AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { errorToastConfig } from '../const';

const BACKEND_URL = 'https://8.react.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;
enum HttpCode {
  Unauthorized = 401,
}

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
      const { response } = error;
      if (response?.status === HttpCode.Unauthorized) {
        return Promise.reject(error);
      } else {
        toast(`${error.message}`, errorToastConfig);
      }
    }
  );

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    }
  );

  return api;
};
