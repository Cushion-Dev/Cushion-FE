import { useMutation, useQueryClient } from '@tanstack/react-query';
import { API } from '../services/api';
import { usePersonalityStore } from '../stores/usePersonalityStore';
import { useMessageLoading } from '../stores/Modal/useModalStore';

interface Message {
  message: string;
  roomId: string;
  personality: string;
}

const postUserMessage = async (data: Message) => {
  const uri =
    data.personality.length > 0
      ? '/change-style/characteristics'
      : '/change-style';
  const body =
    data.personality.length > 0
      ? {
          roomId: data.roomId,
          userMessage: data.message,
          personality: data.personality,
        }
      : { roomId: data.roomId, userMessage: data.message };

  const reuslt = await API.post(uri, body);
  return reuslt;
};

const useMessage = () => {
  const { personality, setPersonality } = usePersonalityStore();
  const { close: closeMessageLoading } = useMessageLoading();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Message) => postUserMessage(data),
    onSuccess: () => {
      closeMessageLoading();
      if (personality.length !== 0) setPersonality('');
      queryClient.invalidateQueries({ queryKey: ['room'] });
    },
    onError: (error) => {
      console.log('post Message error', error);
    },
  });
};

export default useMessage;
