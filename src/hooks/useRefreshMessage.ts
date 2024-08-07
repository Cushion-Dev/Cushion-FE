import axios from 'axios';
import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { useMessageLoading } from '../stores/Modal/useModalStore';

interface RefreshMessageParams {
  roomId: number;
  withPersonality: boolean;
}

const postRefreshMessage = async (params: RefreshMessageParams): Promise<any> => {
  const { roomId, withPersonality } = params;
  const response = await axios.post('/change-style/retry', {
    roomId,
    withPersonality,
  });

  return response.data;
};

const useRefreshMessage = (): UseMutationResult<any, Error, RefreshMessageParams> => {
  const { close: closeMessageLoading } = useMessageLoading();

  return useMutation({
    mutationFn: postRefreshMessage,
    onSuccess: (data) => {
      closeMessageLoading();
      console.log('새로 고침 메시지', data.message);
    },
    onError: (error) => {
      console.error('새로 고침을 할 수 없습니다.', error);
    },
  });
};

export default useRefreshMessage;
