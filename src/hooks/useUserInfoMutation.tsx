import { useMutation } from '@tanstack/react-query';
import { API } from '../services/api';
import { useNavigate } from 'react-router-dom';

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
    apiMember: {
      email: 'email',
    },
  });
};

const useUserInfoMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (userInfo: UserInfo) => postUserInfo(userInfo),
    onSuccess: () => {
      localStorage.removeItem('affiliation');
      localStorage.removeItem('job');
      localStorage.removeItem('name');
      navigate('/cushion/:id'); // 성공 후 이동할 페이지
    },
    onError: (error) => {
      console.log('Error posting user info', error);
    },
  });
};

export default useUserInfoMutation;
