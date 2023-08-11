import axios from 'axios';
import { apiUrl } from 'config/index';

const service = axios.create({
  baseURL: apiUrl,
  timeout: 5000,
});

// Request interceptors
service.interceptors.request.use(
  (config) => ({ ...config }),
  (error) => {
    Promise.resolve(error);
  },
);

// Response interceptors
service.interceptors.response.use(
  (response) => {
    return Promise.resolve(response.data);
  },
  (error) => Promise.resolve(error),
);

export default service;
