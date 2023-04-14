import { BASE_URL, TIME_OUT } from './config';
import AoRequest from './request';

const baseRequest = new AoRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
});

export { baseRequest };
