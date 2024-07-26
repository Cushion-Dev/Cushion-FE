import { useMutation } from '@tanstack/react-query';
import { API } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { useMakeModal } from '../stores/Modal/useModalStore';

interface PartnerInfo {
  partnerName: string;
  partnerRel: string;
}

const postCreateRoom = async (partnerInfo: PartnerInfo) => {
  const result = await API.post('/chat/rooms', {
    partnerName: partnerInfo.partnerName,
    partnerRel: partnerInfo.partnerRel,
  });

  return result;
};

const useCreateRoomMutation = () => {
  const navigate = useNavigate();
  const { close } = useMakeModal();

  return useMutation({
    mutationFn: (partnerInfo: PartnerInfo) => postCreateRoom(partnerInfo),
    onSuccess: (response) => {
      const roomId = response.data.roomId;
      close();
      navigate(`/cushion/${roomId}`);
    },
    onError: (error) => {
      console.log('Error posting create room', error);
    },
  });
};

export default useCreateRoomMutation;
