import { useMutation } from '@tanstack/react-query';
import { API } from '../services/api';
import { useCharacteristicsStore } from '../stores/useCharacteristicsStore';
import { useCharacteristicsLoading } from '../stores/Modal/useModalStore';
import useSaveMessage from './useSaveMessageMutation';
import { MESSAGES } from '../constants/messages';

interface ExtractText {
  roomId?: number;
  conversation: string;
}

const postExtractText = async (data: ExtractText) => {
  return await API.post('/personality', {
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
        content: `${MESSAGES.systemMessage.readyMessage}`,
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
