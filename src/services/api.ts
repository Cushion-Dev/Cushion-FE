import axios from 'axios';

export const API_URI = import.meta.env.VITE_API_URI;

export const API = axios.create({
  baseURL: `${API_URI}`,
  withCredentials: true,
});

API.interceptors.request.use(
  (config) => {
    // 추후 로그인 성공시 로컬스토리지 액세스 토큰으로 교체해야함
    const accessToken =
      'eyJhbGciOiJIUzUxMiJ9.eyJtZW1iZXJJZCI6MTcsInN1YiI6ImZ1bGZpbGxlZF9AbmF2ZXIuY29tIiwiaWF0IjoxNzIyMTM0MDI3LCJleHAiOjE3MjIxMzc2Mjd9.NObCmoNncu_ygU6L7vafLy6xgd5fCgsj2T5yCkyMgpdkbofy5sKLwYRBDH1FKuVMPMFAOP9jKKWVB5_GneyAFQ';

    if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;

    return config;
  },

  (error) => Promise.reject(error)
);

API.interceptors.response.use(
  (response) => {
    const newAccessToken = response.headers['access-token'];
    console.log(newAccessToken);
    if (newAccessToken) {
      localStorage.setItem('accessToken', newAccessToken);
    }
    return response;
  },
  (error) => Promise.reject(error)
);
