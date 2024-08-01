import { useMutation, useQueryClient } from '@tanstack/react-query';
import { API } from '../services/api';
import { useCharacteristicsStore } from '../stores/useCharacteristicsStore';
import { useMessageLoading } from '../stores/Modal/useModalStore';

interface Message {
  message: string;
  roomId: string;
  characteristics: string;
}

const postUserMessage = async (data: Message) => {
  const uri = data.characteristics.length > 0 ? '/change-style/characteristics' : '/change-style';
  const body =
    data.characteristics.length > 0
      ? {
          roomId: data.roomId,
          userMessage: data.message,
          characteristics: data.characteristics,
        }
      : { roomId: data.roomId, userMessage: data.message };

  const reuslt = await API.post(uri, body);
  return reuslt;
};

const useMessage = () => {
  const { characteristics, setCharacteristics } = useCharacteristicsStore();
  const { close: closeMessageLoading } = useMessageLoading();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Message) => postUserMessage(data),
    onSuccess: () => {
      closeMessageLoading();
      if (characteristics.length !== 0) setCharacteristics('');
      queryClient.invalidateQueries({ queryKey: ['room'] });
    },
    onError: (error) => {
      console.error('post Message error', error);
    },
  });
};

export default useMessage;
