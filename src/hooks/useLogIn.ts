import { useState } from 'react';
import { API } from '../services/api';

const useLogIn = () => {
  const [isError, setIsError] = useState<boolean>();

  const login = async () => {
    try {
      const result = await API.get(`/oauth2/authorization/naver`);
      setIsError(false);
      console.log(result);
    } catch (error) {
      if (error) setIsError(true);
    }
  };

  const logout = () => localStorage.removeItem('accessToken');

  return { login, logout, isError };
};

export default useLogIn;
