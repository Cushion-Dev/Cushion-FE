import axios from 'axios';

export const API_URI = import.meta.env.VITE_API_URI;

export const API = axios.create({
  baseURL: `${API_URI}`,
});

API.interceptors.request.use(
  (config) => {
    const accessToken =
      'AAAAOuEG3TBL-hfZYB1aIAUa4dlYNPVLaw1R6vZtbkRkPncrzM8P7t6qZb1pgXWWz0qpH8QNml43mPdw8CdbmlP8_5I';
    if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;

    return config;
  },

  (error) => Promise.reject(error)
);
