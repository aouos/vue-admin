import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';

class AoRequest {
  instance: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);

    this.instance.interceptors.request.use(
      (config) => {
        console.log('请求成功拦截');
        return config;
      },
      (err) => {
        console.log('请求失败拦截');
        return err;
      }
    );

    this.instance.interceptors.response.use(
      (res) => {
        console.log('响应成功拦截');
        return res.data;
      },
      (err) => {
        console.log('响应失败拦截');
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
