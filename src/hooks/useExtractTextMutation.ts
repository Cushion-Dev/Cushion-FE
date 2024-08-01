import { useMutation } from '@tanstack/react-query';
import { API } from '../services/api';
import { useCharacteristicsStore } from '../stores/useCharacteristicsStore';
import { useCharacteristicsLoading } from '../stores/Modal/useModalStore';
import useSaveMessage from './useSaveMessageMutation';

interface ExtractText {
  roomId?: number;
  conversation: string;
}

const postExtractText = async (data: ExtractText) => {
  return await API.post('/characteristics', {
    roomId: data.roomId,
    conversation: data.conversation,
  });
};

const useExtractText = (roomId: number) => {
  const { setCharacteristics } = useCharacteristicsStore();
  const { close: closeCharacteristicsLoading } = useCharacteristicsLoading();
  const { mutate: postSaveMessage } = useSaveMessage();

  return useMutation({
    mutationFn: (data: ExtractText) => postExtractText(data),
    onSuccess: (response) => {
      const Characteristics = response.data;
      postSaveMessage({
        roomId: roomId,
        content: '준비 완료🎉 메시지를 입력해 주시면\r\n 상대방 맞춤 쿠션이 완성돼요!',
      });
      setCharacteristics(Characteristics);
      closeCharacteristicsLoading();
    },
    onError: (error) => {
      console.error('post extract text', error);
    },
  });
};

export default useExtractText;
