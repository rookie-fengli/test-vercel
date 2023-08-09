import axios from 'axios';
import { apiUrl } from 'config/index';
const service = axios.create({
  baseURL: apiUrl,
  timeout: 5000,
});

service.interceptors.request.use(
  (config) => config,
  (error) => {
    Promise.resolve(error);
  },
);

service.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.resolve(error.response),
);
export default service;
