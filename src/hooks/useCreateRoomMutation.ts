import { useMutation } from '@tanstack/react-query';
import { API } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { useMakeModal } from '../stores/Modal/useModalStore';
import useSaveMessage from './useSaveMessageMutation';

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
  const { mutate: postSaveMessage } = useSaveMessage();
  const { close } = useMakeModal();

  return useMutation({
    mutationFn: (partnerInfo: PartnerInfo) => postCreateRoom(partnerInfo),
    onSuccess: (response) => {
      const roomId = response.data.roomId;
      const partnerName = response.data.partnerName;
      const relation = response.data.relationship;
      const userName = response.data.userName;

      close();
      postSaveMessage({
        roomId: Number(roomId),
        content: `안녕하세요! ${userName} 님의 말을 부드럽게 바꾸는 쿠션봇이에요✨✨ 지금부터 '${partnerName}(${relation})' 님께 전달할 쿠션을 같이 만들어 볼게요💭\n\n바꾸고 싶은 메시지 내용을 입력해 주세요!`,
      });
      navigate(`/cushion/${roomId}`);
    },
    onError: (error) => {
      console.error('Error posting create room', error);
    },
  });
};

export default useCreateRoomMutation;
