import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';

class AoRequest {
  instance: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);

    this.instance.interceptors.request.use(
      (config) => {
        return config;
      },
      (err) => {
        return err;
      }
    );

    this.instance.interceptors.response.use(
      (res) => {
        return res.data;
      },
      (err) => {
        return err;
      }
    );
  }

  request(config: AxiosRequestConfig) {
    return this.instance.request(config);
  }

  get(config: AxiosRequestConfig) {
    return this.request({ ...config, method: 'GET' });
  }

  post(config: AxiosRequestConfig) {
    return this.request({ ...config, method: 'POST' });
  }
}

export default AoRequest;
