import { useMutation } from '@tanstack/react-query';
import { API } from '../services/api';

interface UserInfo {
  affiliation: string;
  job: string;
  realName: string;
}

const postUserInfo = async (userInfo: UserInfo) => {
  await API.post('/members/my-info', {
    memberDto: {
      affiliation: userInfo.affiliation,
      job: userInfo.job,
      realName: userInfo.realName,
    },
  });
};

const useUserInfoMutation = () => {
  return useMutation({
    mutationFn: (userInfo: UserInfo) => postUserInfo(userInfo),
    onSuccess: () => {
      localStorage.removeItem('affiliation');
      localStorage.removeItem('job');
      localStorage.removeItem('name');
    },
    onError: (error) => {
      console.log('Error posting user info', error);
    },
  });
};

export default useUserInfoMutation;
