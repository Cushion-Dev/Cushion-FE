import { useMutation } from '@tanstack/react-query';
import { API } from '../services/api';
import { useEditProfileModal } from '../stores/Modal/useModalStore';
import { useAffiliationStore, useJobStore, useNameStore } from '../stores/useTextFieldStore';

interface UserInfo {
  affiliation: string;
  job: string;
  realName: string;
}

const putUserInfo = async (userInfo: UserInfo) => {
  await API.put('/members/my-info', {
    affiliation: userInfo.affiliation,
    job: userInfo.job,
    realName: userInfo.realName,
  });
};

const useEditProfileInfo = () => {
  const { close } = useEditProfileModal();
  const { name } = useNameStore();
  const { job } = useJobStore();
  const { affiliation } = useAffiliationStore();

  return useMutation({
    mutationFn: (userInfo: UserInfo) => putUserInfo(userInfo),
    onSuccess: () => {
      localStorage.setItem('affiliation', affiliation);
      localStorage.setItem('name', name);
      localStorage.setItem('job', job);
      close();
    },
    onError: (error) => {
      console.error('Error edit profile error', error);
    },
  });
};

export default useEditProfileInfo;
