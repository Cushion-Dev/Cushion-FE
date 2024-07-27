import { useMutation, useQueryClient } from '@tanstack/react-query';
import { API } from '../services/api';

interface InitialMessage {
  roomId?: number;
  content: string;
}

const postInitialMessage = async (data: InitialMessage) => {
  const result = await API.post(`/chat/rooms/${data.roomId}/message`, {
    content: data.content,
  });
  return result;
};

const useSaveMessage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: InitialMessage) => postInitialMessage(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['room'] });
    },
    onError: () => {
      console.log('save message error');
    },
  });
};

export default useSaveMessage;
