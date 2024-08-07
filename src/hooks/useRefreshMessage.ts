import { UseMutationResult, useMutation, useQueryClient } from '@tanstack/react-query';
import { useMessageLoading } from '../stores/Modal/useModalStore';
import { API } from '../services/api';

interface IRefreshMessage {
  roomId: number;
  withPersonality: boolean;
}

const postRefreshMessage = async (params: IRefreshMessage): Promise<any> => {
  const { roomId, withPersonality } = params;

  const response = await API.post('/change-style/retry', {
    roomId,
    withPersonality,
  });

  return response.data;
};

const useRefreshMessage = (): UseMutationResult<any, Error, IRefreshMessage> => {
  const { close: closeMessageLoading, open: openMessageLoading } = useMessageLoading();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postRefreshMessage,
    onMutate: () => openMessageLoading(),
    onSuccess: (data) => {
      closeMessageLoading();
      queryClient.invalidateQueries({ queryKey: ['room'] });
    },
    onError: (error) => {
      closeMessageLoading();
      console.error('새로 고침을 할 수 없습니다.', error);
    },
  });
};

export default useRefreshMessage;
