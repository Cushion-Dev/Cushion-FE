import axios from 'axios';

export const API_URI = import.meta.env.VITE_API_URI;

export const API = axios.create({
  baseURL: `${API_URI}`,
});

API.interceptors.request.use(
  (config) => {
    // 추후 로그인 성공시 로컬스토리지 액세스 토큰으로 교체해야함
    const accessToken = import.meta.env.VITE_ACCESS_TOKEN;

    if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;

    return config;
  },

  (error) => Promise.reject(error)
);
