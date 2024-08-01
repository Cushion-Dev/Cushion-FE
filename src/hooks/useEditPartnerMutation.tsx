import { useMutation } from '@tanstack/react-query';
import { API } from '../services/api';

interface PartnerInfo {
  partnerName: string;
  partnerRel: string;
}

const putPartnerInfo = async (partnerInfo: PartnerInfo) => {
  await API.post('/chat/rooms', {
    chatRoomCreateRequest: {
      partnerName: partnerInfo.partnerName,
      partnerRel: partnerInfo.partnerRel,
    },
  });
};

const useEditPartnerInfo = () => {
  return useMutation({
    mutationFn: (partnerInfo: PartnerInfo) => putPartnerInfo(partnerInfo),
    onSuccess: () => {},
    onError: (error) => {
      console.error('Error posting create room', error);
    },
  });
};

export default useEditPartnerInfo;
