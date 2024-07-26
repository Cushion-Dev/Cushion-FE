import { useMutation } from '@tanstack/react-query';
import { API } from '../services/api';

interface PartnerInfo {
  partnerName: string;
  partnerRel: string;
}

const postCreateRoom = async (partnerInfo: PartnerInfo) => {
  console.log(partnerInfo);
  await API.post('/chat/rooms', {
    partnerName: partnerInfo.partnerName,
    partnerRel: partnerInfo.partnerRel,
  });
};

const useCreateRoomMutation = () => {
  return useMutation({
    mutationFn: (partnerInfo: PartnerInfo) => postCreateRoom(partnerInfo),
    onSuccess: () => {},
    onError: (error) => {
      console.log('Error posting create room', error);
    },
  });
};

export default useCreateRoomMutation;
