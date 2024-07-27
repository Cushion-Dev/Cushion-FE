import { useMutation } from '@tanstack/react-query';
import { API } from '../services/api';
import { usePersonalityStore } from '../stores/usePersonalityStore';
import { usePersonalityLoading } from '../stores/Modal/useModalStore';
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
  const { setPersonality } = usePersonalityStore();
  const { close: closePersonalityLoading } = usePersonalityLoading();
  const { mutate: postSaveMessage } = useSaveMessage();

  return useMutation({
    mutationFn: (data: ExtractText) => postExtractText(data),
    onSuccess: (response) => {
      const personality = response.data;
      postSaveMessage({
        roomId: roomId,
        content:
          '준비 완료🎉 메시지를 입력해 주시면\r\n 상대방 맞춤 쿠션이 완성돼요!',
      });
      setPersonality(personality);
      closePersonalityLoading();
    },
    onError: (error) => {
      console.log('post extract text', error);
    },
  });
};

export default useExtractText;
