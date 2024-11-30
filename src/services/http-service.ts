import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import { API_BASE_PATH } from '../config/api';

type Params = {
  baseURL?: string;
};

export class HttpService {
  private readonly axios: AxiosInstance;

  constructor(params?: Params) {
    this.axios = axios.create({
      baseURL: params?.baseURL || API_BASE_PATH,
    });
  }

  get<T = Record<string, unknown>>(url: string, config?: AxiosRequestConfig) {
    return this.axios.get<T>(url, config);
  }

  post<T = Record<string, unknown>>(
    url: string,
    data?: Record<string, unknown>,
    config?: AxiosRequestConfig,
  ) {
    return this.axios.post<T>(url, data, config);
  }

  delete(url: string, config?: AxiosRequestConfig) {
    return this.axios.delete(url, config);
  }

  patch<T = Record<string, unknown>>(
    url: string,
    data?: Record<string, unknown>,
    config?: AxiosRequestConfig,
  ) {
    return this.axios.patch<T>(url, data, config);
  }
}
