import axios from 'axios';
import { mediaAutomationUrl } from 'config/index';
const service = axios.create({
  baseURL: mediaAutomationUrl,
  timeout: 5000,
});

// Request interceptors
service.interceptors.request.use(
  (config) => {
    config.headers.token = 'wangkt';

    return { ...config };
  },
  (error) => {
    Promise.reject(error);
  },
);

// Response interceptors
service.interceptors.response.use(
  (response) => {
    return Promise.resolve(response.data);
  },
  (error) => Promise.reject(error),
);

export default service;
