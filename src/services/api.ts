import axios from 'axios';

export const API_URI = import.meta.env.VITE_API_URI;

export const API = axios.create({
  baseURL: `${API_URI}`,
  withCredentials: true,
});

API.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;

    return config;
  },

  (error) => Promise.reject(error)
);

// API.interceptors.response.use(
//   (response) => {
//     const newAccessToken = response.headers['access-token'];
//     console.log(newAccessToken);
//     if (newAccessToken) {
//       localStorage.setItem('accessToken', newAccessToken);
//     }
//     return response;
//   },
//   (error) => Promise.reject(error)
// );
